import styles from './Metrics.module.css';

import usersIcon from "../../assets/pictures/users.svg";
import clipboardIcon from "../../assets/pictures/clipboard-check.svg";
import trendingIcon from "../../assets/pictures/trending-up.svg";
import clockIcon from "../../assets/pictures/clock-3.svg";

const ICON_MAP = {
  students: {
    icon: usersIcon,
    className: styles.iconStudents,
  },

  review: {
    icon: clipboardIcon,
    className: styles.iconReview,
  },

  progress: {
    icon: trendingIcon,
    className: styles.iconProgress,
  },

  clock: {
    icon: clockIcon,
    className: styles.iconClock,
  },
};

export default function Metrics({ metrics }) {
  return (
    <div className={styles.metricsContainer}>
      {metrics.map((metric, index) => {
        const iconConfig = ICON_MAP[metric.icon];

        return (
          <div
            key={index}
            className={styles.metricCard}
          >
            {/* Title */}
            <span className={styles.metricTitle}>
              {metric.title}
            </span>

            {/* Icon */}
            {iconConfig && (
              <div
                className={`${styles.iconWrapper} ${iconConfig.className}`}
              >
                <img
                  src={iconConfig.icon}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            )}

            {/* Value + Trend */}
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>
                {metric.value}
              </span>

              {metric.trend && (
                <span
                  className={`${styles.metricTrend} ${
                    styles[metric.trendColor] || styles.trendGray
                  }`}
                >
                  {metric.trend}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}