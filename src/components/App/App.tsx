import { TheHeader } from 'src/components/TheHeader';
import { TheSidebar } from 'src/components/TheSidebar';
import { Navigation } from 'src/components/Navigation';
import { Table } from 'src/components/Table';

import style from './App.style.module.scss';

export function App() {
   return (
      <div className={style.app}>
         <div className={style.app__header}>
            <TheHeader />
         </div>
         <div className={style.app__aside}>
            <TheSidebar />
         </div>
         <main className={style.app__main}>
            <div className={style.main__nav}>
               <Navigation />
            </div>
            <div className={style.main__content}>
               <Table />
            </div>
         </main>
      </div>
   );
}
