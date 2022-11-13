import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onSwitch, onHeal }) => (
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
      Attack
    </div>
    <div onClick={onSwitch} className={styles.option}>
      Switch
    </div>
    <div onClick={onHeal} className={styles.option}>
      Heal
    </div>
  </div>
);
