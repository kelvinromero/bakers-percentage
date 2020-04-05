import React from 'react';

export default function Ingredient(props) {
    const {value, onQuantityChange, name} = props
    return (
        <section className="ingredient">
            <input type="text" />
            <input type="number" name={name}
                value={value}
                onChange={onQuantityChange} />
            <input type="text" />
        </section>
    );
}