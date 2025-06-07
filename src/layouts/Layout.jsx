import styles from './Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <header  className={styles.heaber}>
                <h1>Book App </h1>
                <p><a href="https://rezaghazikhani.ir">rgk.Code</a> | React.js Full Course</p>
            </header>
            {children}
            <footer className={styles.footer}> <p>Developed by Reza with ❤</p> </footer>
        </>
    )
}

export default Layout