import React, {useState} from 'react'
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri"

export default function BtnFav(props) {
    const [checked, setChecked] = useState(props.check);
    return (
        <button type='button' className={'btn-fav ' + props.className} onClick={()=>setChecked(!checked)}>
            {
                (checked)
                ? <RiHeart3Fill className='main-color'/>
                : <RiHeart3Line className='gray'/>
            }
        </button>
    );
}