import { storage, db } from "./firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 

async function uploadBase64Img(file) {
  try {
    const storagePath = file.substring(0, 12);
    const storageRef = ref(storage, storagePath);

    const snapshot = await uploadString(storageRef, file, 'base64');
    console.log('Uploaded a base64url string!');

    const downloadURL = await getDownloadURL(storageRef);
    console.log('File available at', downloadURL);
  } catch (error) {
    console.error('Error uploading base64 file:', error);
  }
}

async function createPost(postData) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      backImg: postData.backImgUrl,
      frontImg: postData.frontImgUrl,
      score: postData.score,
      username: postData.username,
      postedAt: Date.now()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function getLeaderBoard() {

}

function getTimeLine() {

}

export {
  uploadBase64Img,
  createPost
}