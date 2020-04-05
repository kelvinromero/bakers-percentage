import React, { useState, useEffect } from 'react';
import { FaCalculator as CalcIcon} from 'react-icons/fa' ;

import Ingredient  from '../../components/Ingredient'
import '../../style.css'

export default function MainCalculator() {
    const [ recipe, setRecipe ] = useState({
        flour: 1000,
        water: 670,
        salt: 20,
    });

    
    function handleChange(e) {
        setRecipe({
            ...recipe,
            [e.target.name]:  e.target.value
        })
    }

    return (
        <section className="main-calculator">
            <header>
                <CalcIcon size={20} />
                <h4>Dough Calculator</h4>
            </header>

            <Ingredient name={'flour'} value={recipe.flour} onQuantityChange={handleChange}/>
            <Ingredient name={'water'} value={recipe.water} onQuantityChange={handleChange}/>
            <Ingredient name={'salt'} value={recipe.salt} onQuantityChange={handleChange}/>

        </section>
    )
}