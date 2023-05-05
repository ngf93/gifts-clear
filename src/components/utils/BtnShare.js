import React, {useState} from 'react';
import { FiShare2 } from "react-icons/fi";

export default function BtnShare(props) {
    const [checked, setChecked] = useState(props.check);
    return (
        <button type='button' className={'btn-share ' + props.className} data-checked={(checked === true)?'true':'false'} onClick={()=>setChecked((checked)?false:true)}>
            <FiShare2 />
        </button>
    );
}