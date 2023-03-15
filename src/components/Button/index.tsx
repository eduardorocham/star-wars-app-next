import styles from './Button.module.css';

type Props = {
    text: string;
}

export const Button = ({text}:Props) => {
    return (
        <button className={styles.buttonHome}>
            {text}
        </button>
    )
}