import { useState } from 'react';

import styles from './Header.module.css';
import searchIcon from "../../assets/pictures/search.svg";
import notifyIcon from "../../assets/pictures/bell.svg";
import sparklesIcon from "../../assets/pictures/sparkles.svg";

export default function Header() {
    const [haveNotifications, setHaveNotifications] = useState(true);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <img src={sparklesIcon} className="no-select" alt="Sparkles" />
                </div>
                <span className={`${styles.logoText} no-select`}>TutorLib</span>
            </div>

            <div className={styles.nav}>
                <button className={styles.navButton} aria-label="Поиск">
                    <img src={searchIcon} className="no-select" alt="Search" />
                </button>
                <button className={`${styles.navButton} ${styles.notificationBtn}`} aria-label="Уведомления">
                    <img src={notifyIcon} className="no-select" alt="Notify" />                    
                    {haveNotifications && <span className={styles.badge}></span>}
                </button>
                
                <button className={styles.avatarButton} aria-label="Профиль">
                    <span className="no-select">AL</span>
                </button>
            </div>
        </header>
    );
}
