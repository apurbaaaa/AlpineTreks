import styles from '../../../public/css/Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.placeholderHeader}></div>
      <div className={styles.placeholderSection}>
        <div className={styles.placeholderImage}></div>
        <div className={styles.placeholderTextBlock}>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
        </div>
      </div>
      <div className={styles.placeholderSection}>
        <div className={styles.placeholderImage}></div>
        <div className={styles.placeholderTextBlock}>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
          <div className={styles.placeholderText}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

