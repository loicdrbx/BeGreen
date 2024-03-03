import { storage, db } from "./firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { query, getDocs, orderBy, collection, addDoc } from "firebase/firestore";

async function uploadBase64Img(file) {
  try {
    const storagePath = file.substring(0, 12);
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

function getLeaderBoard() {}

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
  // console.log(postsList);
  return postsList;
}

export { uploadBase64Img, createPost, getTimeline };
