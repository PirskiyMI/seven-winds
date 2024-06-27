import style from './Navigation.style.module.scss';

export function Navigation() {
   return (
      <ul className={style.navigation}>
         <li className={style.navigation__item}>Строительно-монтажные работы</li>
      </ul>
   );
}
