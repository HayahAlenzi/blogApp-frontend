import React,{useState} from 'react'
import ProgressBar from './ProgressBar';

export default function UploadForm({setInputImg}) {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    const changeVal=(e)=>{
        let selected=e.target.files[0]
        console.log(selected);
        if(selected){
            setFile(selected)
            setError('');
        } else {
          setFile(null);
          setError('Please select an image file (png or jpg)');
        }
      };
    
      return (
        <form>
          <label>
            <input type="file" onChange={changeVal} />
            <span>+</span>
          </label>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} setInputImg={setInputImg} /> }
          </div>
        </form>
        )
}