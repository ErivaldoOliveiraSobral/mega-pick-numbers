import Button from '../../Button';
import Number from '../../Number';

import style from './styles.module.css';

interface IMainProps {
    loading: boolean,
    numbers: Array<number>,
    handleSubmit: () => void
};

const Main = ({ loading, numbers = [], handleSubmit }: IMainProps) => {
    if (loading) {
        return (
            <div className={style.container}>
                <pre style={{ color: "white" }}>Processando...</pre>
            </div>
        )
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
    )
};

export default Main;
