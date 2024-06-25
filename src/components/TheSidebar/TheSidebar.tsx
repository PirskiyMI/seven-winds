import ArrowIcon from 'src/assets/icons/arrow.svg';
import NavIcon from 'src/assets/icons/nav-item.svg';

import { navData } from './TheSidebar.mock';
import styles from './TheSidebar.style.module.scss';

export function TheSidebar() {
   const nav = (
      <nav className={`${styles.sidebar__nav} ${styles.nav}`}>
         <ul className={styles.nav__list}>
            {navData.map(({ id, path, title }) => {
               const classNames =
                  title === 'СМР'
                     ? `${styles.nav__item} ${styles.nav__item_active}`
                     : styles.nav__item;

               return (
                  <li key={id} className={classNames}>
                     <a href={path} className={styles.nav__link}>
                        <NavIcon className={styles.nav__icon} />
                        <span>{title}</span>
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );

   return (
      <aside className={styles.sidebar}>
         <div className={styles.sidebar__header}>
            <div className={styles.sidebar__text}>
               <span>Название проекта</span>
               <span className={styles.sidebar__label}>Аббревиатура</span>
            </div>
            <button className={styles.sidebar__button}>
               <ArrowIcon className={styles.sidebar__icon} />
            </button>
         </div>
         <div className={styles.sidebar__main}>{nav}</div>
      </aside>
   );
}
