import styles from './Loader.module.css'

export const Loader = () => {

    return (
        <div className={styles.spinner_overlay}>
            <div className={styles.spinner}>
                <span className={styles.spinner_span}>Loading...</span>
                <div className={styles.half_spinner}></div>
            </div>
        </div>
    );

}