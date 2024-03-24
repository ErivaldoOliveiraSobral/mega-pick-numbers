import { useState } from 'react';
import Main from '../presentention';

interface IMainContainer {
    amount: number
}

const MainContainer = ({ amount }: IMainContainer) => {
    const [numbers, setNumbers] = useState<Array<number>>([]);
    
    const handleSubmit = async () => {
        try {
            const _numbers =
                await fetch(`/api/numbers?qtd=${amount}`).then(resp => resp.json());
            setNumbers(_numbers);
        } catch (error) {
            console.error(JSON.stringify(error));
        };
    }

    return <Main numbers={numbers} handleSubmit={handleSubmit} />;
};

export default MainContainer;
