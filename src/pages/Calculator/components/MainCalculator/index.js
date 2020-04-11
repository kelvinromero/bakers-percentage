import React, { useState, useEffect } from 'react';
import { FaCalculator as CalcIcon} from 'react-icons/fa' ;

import Ingredient  from '../../components/Ingredient'
import '../../style.css'

export default function MainCalculator() {
    // TODO: Add ingredients dinamically.
    const [ recipe, setRecipe ] = useState([
        {
            name: 'flour',
            quantity: 1000,
            percentagem: 1
        },
        {
            name: 'water',
            quantity: 670,
            percentagem: .67
        },
    ]);

    useEffect(() => {
        console.log('====================================');
        console.log(recipe);
        console.log('====================================');

    }, [recipe]);


    
    function handleChange(e) {
        setRecipe({
            ...recipe,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    return (
        <section className="main-calculator">
            <header>
                <CalcIcon size={20} />
                <h4>Dough Calculator</h4>
            </header>

            <Ingredient name={recipe[0].name} value={recipe[0].quantity} onQuantityChange={handleChange}/>
            <Ingredient name={recipe[1].name} value={recipe[1].quantity} onQuantityChange={handleChange}/>

        </section>
    )
}