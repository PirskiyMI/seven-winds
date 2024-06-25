import styles from './Navigation.style.module.scss';

export function Navigation() {
   return (
      <div className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>Строительно-монтажные работы</li>
         </ul>
      </div>
   );
}
