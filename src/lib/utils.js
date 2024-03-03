import { storage, db } from "./firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { query, where, getDocs, updateDoc, orderBy, collection, addDoc } from "firebase/firestore";

async function uploadBase64Img(file) {
  try {
    const storagePath = Math.random().toString(36).substring(2) + ".jpg";
    // const storagePath = file.substring(0, 12);
    const storageRef = ref(storage, storagePath);

    const snapshot = await uploadString(storageRef, file, "data_url");
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

async function createPost(postData) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      username: postData.username,
      backImg: postData.backImgUrl,
      frontImg: postData.frontImgUrl,
      score: postData.score,
      caption: postData.caption,
      postedAt: Date.now(),
    });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getLeaderboard() {
  let results = [];
  try {
    const q = query(collection(db, "users"), orderBy("currentScore", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
  } catch (e) {
    console.log("Failed to get leader board: ", e);
  }
  return results;
}

async function incrementScore(username, score) {
  try {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    for (const doc of querySnapshot.docs) {
      const newScore = (doc.data().currentScore += score);
      await updateDoc(doc.ref, { currentScore: newScore });
    }
  } catch (e) {
    console.error("Error incrementing score: ", e);
  }
}

async function getTimeline() {
  let postsList = [];
  try {
    const q = query(collection(db, "posts"), orderBy("postedAt", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      postsList.push(doc.data());
    });
  } catch (e) {
    console.error("Error getting timeline: ", e);
  }
  return postsList;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { uploadBase64Img, createPost, getTimeline, incrementScore, getLeaderboard };
