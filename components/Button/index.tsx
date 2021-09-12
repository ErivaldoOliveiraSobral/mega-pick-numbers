import style from './styles.module.css';

interface IButtonProps {
    onSubmit: () => void
}

const Button = ({ onSubmit }:IButtonProps) => (
    <div onClick={onSubmit} className={style.container}>
        Gerar números
    </div>
);

export default Button;