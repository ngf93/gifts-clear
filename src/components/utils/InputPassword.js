import {useState} from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function InputPassword(props) {
    const [visible, setVisibility] = useState(props.visible);

    return (
        <div className={"password " + props.className}>
            <input className={props.inputClass} type={(visible) ? 'text' : 'password'} name={props.name} placeholder={props.placeholder} autoComplete="current-password" minLength="8" maxLength="20" size="8" required value={props.value} onChange={props.onChange}/>
            <button type="button" onClick={() => setVisibility((visible===true)?false:true)}>
                {
                    (visible) 
                    ? <FiEyeOff />
                    : <FiEye />
                }
            </button>
        </div>
    )
}