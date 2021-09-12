import Button from '../../Button';
import Number from '../../Number';

import style from './styles.module.css';

interface IMainProps {
    numbers: Array<number>,
    handleSubmit: () => void
};

const Main = ({ numbers = [], handleSubmit }: IMainProps) => (
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

export default Main;
