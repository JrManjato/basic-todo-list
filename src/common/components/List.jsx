import React from 'react';
import ListItem from './ListItem';

export default function List({ list, scale, isCheckable, setList }) {
    return (
        <ul>
            {list.map((item) => item.scale === scale && (
                <ListItem
                    id={item.id}
                    text={item.value}
                    isCheckable={isCheckable}
                    setList={setList}
                    list={list}
                />
            ))}
        </ul>
    )
}
