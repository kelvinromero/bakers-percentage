import React, { useState, useEffect } from 'react';
import { FaCalculator as CalcIcon} from 'react-icons/fa' ;

import '../../style.css'

export default function MainCalculator() {
    const [ flourQt, setFlourQt ] = useState(1000);
    const [ flourPc, setFlourPc ] = useState(1);
    
    const [ waterQt, setWaterQt ] = useState(0);
    const [ waterPc, setWaterPc ] = useState(0.67);

    useEffect(() => {
        setWaterQt(waterPc*flourQt);
    }, [])

    useEffect(() => {
        console.log('====================================');
        console.log(waterQt);
        console.log('====================================');

    }, waterQt)


    return (
        <section className="main-calculator">
            <header>
                <CalcIcon size={20} />
                <h4>Dough Calculator</h4>
            </header>

            <section className="ingredient">
                <input type="text" value={"Flour"} />
                <input type="number" value={flourQt} onChange={e => setFlourQt(e.target.value)} />
                <input type="text" value={`${flourPc*100} %`} readOnly/>
            </section>

            <section className="ingredient">
                <input type="text" value={"Water"} />
                <input type="number" value={waterQt} />
                <input type="text" value={`${waterPc*100} %`} />
            </section>

            <section className="ingredient">
                <input type="text" value={"Starter"} />
                <input type="number" />
                <input type="text" />
            </section>

            <section className="ingredient">
                <input type="text" value={"Salt"} />
                <input type="number" />
                <input type="text" />
            </section>
        </section>
    )
}