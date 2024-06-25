import { TheHeader } from 'src/components/TheHeader';
import { TheSidebar } from 'src/components/TheSidebar';

import styles from './App.style.module.scss';

export function App() {
   return (
      <div className={styles.app}>
         <div className={styles.app__header}>
            <TheHeader />
         </div>
         <div className={styles.app__aside}>
            <TheSidebar />
         </div>
         <div className={styles.app__main}>
            
         </div>
      </div>
   );
}
