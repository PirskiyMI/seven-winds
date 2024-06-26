import style from './Navigation.style.module.scss';

export function Navigation() {
   return (
      <div className={style.navigation}>
         <ul className={style.navigation__list}>
            <li className={style.navigation__item}>Строительно-монтажные работы</li>
         </ul>
      </div>
   );
}
