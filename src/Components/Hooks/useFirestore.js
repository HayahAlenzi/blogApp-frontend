import React , { useState, useEffect }from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../firebase/config';

export default function useFirestore() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
        });
  
      return () => unsub();
      // this is a cleanup function that react will run when
      // a component using the hook unmounts
    }, [collection]);
  
    return { docs };
  
}
