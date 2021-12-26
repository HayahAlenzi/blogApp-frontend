import React , { useState, useEffect }from 'react'
import { projectStorage, projectFirestore } from '../../firebase/config';


    const useStorage = (file) => {
        const [progress, setProgress] = useState(0);
        const [error, setError] = useState(null);
        const [url, setUrl] = useState(null);
      
        useEffect(() => {
          // references
          const storageRef = projectStorage.ref(file.name);
          const collectionRef = projectFirestore.collection('images');
          
          storageRef.put(file).on('state_changed', (snap) => {//snapوتاخذ ارقومن اخر state_changedوتسمع لافينت اسمه put  ميثود تنقل الفايل للستورج ريفرنس
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;//فورميلا للبريسنتج
            setProgress(percentage);
          }, (err) => {//ارقومنت ثالث لنفس الفينكشن
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();
            // const createdAt = timestamp();
            // await collectionRef.add({ url, createdAt });
            setUrl(url);
          });
        }, [file]);
      
        return { progress, url, error };
      }
      
      export default useStorage;