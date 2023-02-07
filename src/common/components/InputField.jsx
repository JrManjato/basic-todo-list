import React, { useState } from 'react';

const InputField = ({ setList }) => {
    const [newItem, setNewItem] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        // ! Check for empty item
        if (!newItem) {
            alert("Press enter an item.");
            return;
        }

        const item = {
            id: Date.now(),
            value: newItem,
            scale: 'todo'
        };

        // Add new item to items array
        setList((oldList) => [...oldList, item]);

        // Reset newItem back to original state
        setNewItem("");
    }
    return (
        <form
            className="form col-md-10"
            onSubmit={(e) => {
                addItem(e);
            }}
        >
            <input
                type="text"
                placeholder="Add a task..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                data-testid="input-field"
            />
        </form>
    )
}

export default InputField;