import styles from "./ColorChanger.module.css";

function ColorChanger(props) {
  return (
    <div className={styles.holder}>
      <div style={{ background: props.bg }} className={styles.container}></div>
    </div>
  );
}

export default ColorChanger;
