import storage from "./firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";

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

export {
  uploadBase64Img
}