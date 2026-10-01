import styles from './FocusCard.module.css';

export default function FocusCard(){
    return (
        <div className={styles.focusCard}>
            <div className={styles.greeting}>
                <p className={styles.eyebrown}></p>
                <p className={styles.title}></p>
                <p className={styles.summary}></p>
            </div>
            <button>
                <span className="no-select">+ Create assignment</span>
            </button>
        </div>
    );
}