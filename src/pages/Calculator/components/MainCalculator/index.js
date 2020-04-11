import React, { useState } from 'react';
import { FaCalculator as CalcIcon } from 'react-icons/fa';

import Ingredient from '../../components/Ingredient'
import '../../style.css'

export default function MainCalculator() {
    const [recipe, setRecipe] = useState([
        {
            name: 'flour',
            quantity: 1000,
        },
        {
            name: 'water',
            quantity: 670,
        },
        {
            name: 'salt',
            quantity: 20,
        },
    ]);

    const handleQuantityChange = (e) => {
        const newRecipe = recipe.map(i => {
            if (i.name === e.target.name) {
                i.quantity = e.target.value
            }

            return i;
        })

        setRecipe([
            ...newRecipe
        ])
    }

    function addIngredient() {
        setRecipe([
            ...recipe,
            {
                name: '',
                quantity: 0,
                percentagem: 0,
            }
        ])
    }

    return (
        <section className="main-calculator">
            <header>
                <CalcIcon size={20} />
                <h4>Dough Calculator</h4>
            </header>

            {
                recipe.map(ingredient => {
                    return <Ingredient
                        key={ingredient.name}
                        name={ingredient.name}
                        value={ingredient.quantity}
                        onQuantityChange={handleQuantityChange} />
                })
            }


            <button onClick={addIngredient}>Add</button>
        </section>
    )
}