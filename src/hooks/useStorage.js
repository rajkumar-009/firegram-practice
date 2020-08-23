// Custom hooks for interacting with firebase storage
import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // useEffect takes in a function and a dependecy as parameters. The function will be fired everytime the dependency parameter changes. It's like an event handler.
    //references
    const storageRef = projectStorage.ref(file.name); // create a storage reference name for the file to be uploaded
    const collectionRef = projectFirestore.collection("images"); // create a collection reference in firestore

    // asynchronous function to upload file to firebase storage
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const createdAt = timestamp();
        const url = await storageRef.getDownloadURL(); // url will be updated once upload is successfull
        collectionRef.add({
          url: url,
          createdAt: createdAt,
        });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
