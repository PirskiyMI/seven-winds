import ArrowIcon from 'src/assets/icons/arrow.svg';
import NavIcon from 'src/assets/icons/nav-item.svg';

import { navData } from './TheSidebar.mock';
import style from './TheSidebar.style.module.scss';

export function TheSidebar() {
   const nav = (
      <nav className={`${style.sidebar__nav} ${style.nav}`}>
         <ul className={style.nav__list}>
            {navData.map(({ id, path, title }) => {
               const classNames =
                  title === 'СМР'
                     ? `${style.nav__item} ${style.nav__item_active}`
                     : style.nav__item;

               return (
                  <li key={id} className={classNames}>
                     <a href={path} className={style.nav__link}>
                        <NavIcon className={style.nav__icon} />
                        <span>{title}</span>
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );

   return (
      <aside className={style.sidebar}>
         <div className={style.sidebar__header}>
            <div className={style.sidebar__text}>
               <span>Название проекта</span>
               <span className={style.sidebar__label}>Аббревиатура</span>
            </div>
            <button className={style.sidebar__button}>
               <ArrowIcon className={style.sidebar__icon} />
            </button>
         </div>
         <div className={style.sidebar__main}>{nav}</div>
      </aside>
   );
}
