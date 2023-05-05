import React from 'react'
import {ReactComponent as VK} from '../../styles/imgs/VK.svg'
import {ReactComponent as Telegram} from '../../styles/imgs/Telegram.svg'
import {ReactComponent as Whatsapp} from '../../styles/imgs/whatsapp.svg'
import {ReactComponent as Online} from '../../styles/imgs/online.svg'

const Social = (props) => {
    return (
        <ul className={'social-list list-unstyled ' + props.className}>
            <li><a href='https://vk.com/bdkzn' target='_blank' rel="noreferrer"><VK/></a></li>
            <li><a href='https://t.me/presents_beautifulday' target='_blank' rel="noreferrer"><Telegram/></a></li>
            <li><a href='https://wa.me/79600555160' target='_blank' rel="noreferrer"><Whatsapp/></a></li>
            <li><a href='https://web.vonline.su/podarki_kzn' target='_blank' rel="noreferrer"><Online className='w2'/></a></li>
        </ul>
    );
};

export default Social;