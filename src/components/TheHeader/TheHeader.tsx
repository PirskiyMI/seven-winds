import style from './TheHeader.style.module.scss';

import MenuIcon from 'src/assets/icons/menu.svg';
import FallbackIcon from 'src/assets/icons/fallback.svg';

export function TheHeader() {
   const navMenu = (
      <nav className={`${style.header__nav} ${style.nav}`}>
         <ul className={style.nav__list}>
            <li className={`${style.nav__item} ${style.nav__item_active}`}>
               <a href="#" className={style.nav__link}>
                  Просмотр
               </a>
            </li>
            <li className={style.nav__item}>
               <a href="#" className={style.nav__link}>
                  Управление
               </a>
            </li>
         </ul>
      </nav>
   );

   return (
      <header className={style.header}>
         <div className={style.header__buttons}>
            <button className={style.header__button}>
               <MenuIcon className={style.header__icon} />
            </button>
            <button className={style.header__button}>
               <FallbackIcon className={style.header__icon} />
            </button>
         </div>
         {navMenu}
      </header>
   );
}
