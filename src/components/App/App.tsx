import { TheHeader } from 'src/components/TheHeader';
import { TheSidebar } from 'src/components/TheSidebar';

import styles from './App.style.module.scss';
import { Navigation } from '../Navigation';

export function App() {
   return (
      <div className={styles.app}>
         <div className={styles.app__header}>
            <TheHeader />
         </div>
         <div className={styles.app__aside}>
            <TheSidebar />
         </div>
         <main className={styles.app__main}>
            <div className={styles.main__nav}>
               <Navigation />
            </div>
         </main>
      </div>
   );
}
