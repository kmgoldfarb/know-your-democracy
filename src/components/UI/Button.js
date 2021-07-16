import styles from './Button.module.css';
const Button = props => {
  return <button className={styles.btn}>{props.btnName}</button>;
};

export default Button;
