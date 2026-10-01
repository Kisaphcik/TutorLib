import styles from './FocusCard.module.css';
import { getSpecificDate, isMorning, isAfternoon, isEvening } from '../../utils/Times';

export default function FocusCard({ name }) {
  const getGreetingText = (name) => {
    if (isMorning()) return `Good morning, ${name}`;
    if (isAfternoon()) return `Good afternoon, ${name}`;
    if (isEvening()) return `Good evening, ${name}`;
    return `Good night, ${name}`;
  };

  return (
    <div className={styles.focusCard}>
      <div className={styles.greeting}>
        <p className={styles.eyebrow}>{getSpecificDate()}</p>
        <p className={styles.title}>{getGreetingText(name)}</p>
        <p className={styles.summary}>You have 3 submissions to review and 2 sessions today.</p>
      </div>
      <button>
        <span className="no-select">+ Create assignment</span>
      </button>
    </div>
  );
}
