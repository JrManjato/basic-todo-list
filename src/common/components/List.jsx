import React from 'react';
import ListItem from './ListItem';

const List = ({ list, scale, isCheckable, setList }) => {
    return (
        <ul data-testid={`${scale}-list`}>
            {list.map((item) => item.scale === scale && (
                <ListItem
                    id={item.id}
                    text={item.value}
                    isCheckable={isCheckable}
                    setList={setList}
                    list={list}
                    scale={scale}
                    key={item.id}
                />
            ))}
        </ul>
    )
}

export default List;