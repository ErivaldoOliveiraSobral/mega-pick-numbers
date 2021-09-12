import styles from './styles.module.css';

interface INumberProps {
    value: number;
};

const Number = ({ value }:INumberProps) => (
    <div className={styles.container}>
        <div className={styles.number}>{value}</div>
    </div>
);

export default Number;
