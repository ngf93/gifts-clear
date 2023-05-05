import React from 'react';
import { IoChevronBack, IoChevronForward, IoEllipsisHorizontal } from "react-icons/io5";

export default function NavPagination(props) {
    return (
        <nav className={'pagination ' + props.className}>
            <ul>
                <li>
                    <a href='/'>
                        <IoChevronBack/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        1
                    </a>
                </li>
                <li>
                    <a href='/'>
                        2
                    </a>
                </li>
                <li>
                    <a href='/' className='active'>
                        3
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <IoEllipsisHorizontal/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        21
                    </a>
                </li>
                <li> 
                    <a href='/'>
                        <IoChevronForward/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}