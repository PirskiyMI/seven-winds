import styles from './TheHeader.style.module.scss';

import MenuIcon from 'src/assets/icons/menu.svg';
import FallbackIcon from 'src/assets/icons/fallback.svg';

export function TheHeader() {
   const navMenu = (
      <nav className={`${styles.header__nav} ${styles.nav}`}>
         <ul className={styles.nav__list}>
            <li className={`${styles.nav__item} ${styles.nav__item_active}`}>
               <a href="#" className={styles.nav__link}>
                  Просмотр
               </a>
            </li>
            <li className={styles.nav__item}>
               <a href="#" className={styles.nav__link}>
                  Управление
               </a>
            </li>
         </ul>
      </nav>
   );

   return (
      <header className={styles.header}>
         <div className={styles.header__buttons}>
            <button className={styles.header__button}>
               <MenuIcon className={styles.header__icon} />
            </button>
            <button className={styles.header__button}>
               <FallbackIcon className={styles.header__icon} />
            </button>
         </div>
         {navMenu}
      </header>
   );
}
