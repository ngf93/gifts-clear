import React from 'react';

export default function BonusHistory(props) {
    return (
        <div className='history-item'>
            {
                (props.operation==='1')
                ?<div className='main-color'>Начисление</div>
                :<div className='blue'>Списание</div>
            }
            <div>{props.date}</div>
            <div>Заказ №{props.order}</div>
            {
                (props.operation==='1')
                ? <div className='summ main-color'>+ {props.summ}</div>
                : <div className='summ blue'>- {props.summ}</div>
            }
        </div>
    );
}