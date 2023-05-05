import React, {useState} from 'react';
import { FiDownload } from "react-icons/fi";

export default function InputFile(props) {
    const [files, setFiles] = useState(0);

    return (
        <label className={"input-file "+props.className}>
            {
                (props.multiple) ?
                <input type="file" multiple onChange={(e) => setFiles(e.target.files.length)}/>
                : <input type="file" onChange={(e) => setFiles(e.target.files.length)}/>
            }
            <FiDownload />
            <div className='mx-3'>Прикрепить файл</div>
            <div className="ind">{ (files>0) && files }</div>
        </label>
    )
}