import { ReactComponentElement, useEffect, useState } from 'react';

import style from './styles.module.css';

import Button from '../Button';
import Number from '../Number';

interface IMainProps {
    amount: number
};

const Main = ({ amount }: IMainProps) => {
    const [numbers, setNumbers] = useState<Array<number>>([]);
    
    const handleSubmit = async () => {
        const _numbers = 
            await fetch(`/api/numbers?qtd=${amount}`).then(response => response.json());
        setNumbers(_numbers);
    }
    return (
        <div className={style.container}>
            <div className={style.numbers}>
                {numbers.map(number => (
                    <Number key={number} value={number} />
                ))}
            </div>
            <div className={style.button}>
                <Button onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Main;