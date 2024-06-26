import { InputHTMLAttributes } from 'react';

import style from './MyField.style.module.scss';

export function MyField(props: InputHTMLAttributes<HTMLInputElement>) {
   return <input {...props} className={style.field} />;
}
