import React, { useEffect } from 'react';
import useStorage from './Hooks/useStorage';
// import { motion } from 'framer-motion';

export default function ProgressBar({file,setFile, setInputImg}) {

    const { progress, url } = useStorage(file);
    console.log(progress, url);
    useEffect(() => {
      if (url) {
        setInputImg(url);
      }
    }, [url]);
  
    return (
        <div className='loader'>
            <div className='loader2' style={{width:`${progress}%`}}></div>
        </div>
    //     <motion.div className="progress-bar"
    //   initial={{ width: 0 }}
    //   animate={{ width: progress + '%' }}
    // ></motion.div>
    )
}
