import styles from './Login.module.css'

export default function Login() {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return ( 

        <div className={styles["page-background"]}>

            <div className={styles["login-overlay"]}>
                <div className={styles["login-modal"]} role="dialog" aria-modal="true" aria-labelledby="login-title">
                    <div className={styles["login-header"]}>
                        <div>
                            <h2 id="login-title">Welcome Back</h2>
                            <p>Log in to continue giving furniture a second life.</p>
                        </div>
                        <button type="button" className={styles["login-close"]} aria-label="Close">×</button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles["login-form-group"]}>
                            <label htmlFor="login-email">Email *</label>
                            <input type="email" id="login-email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className={styles["login-form-group"]}>
                            <label htmlFor="login-password">Password *</label>
                            <input type="password" id="login-password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div className={styles["login-buttons"]}>
                            <button type="button" className={styles["login-cancel"]} >Cancel</button>
                            <button type="submit" className={styles["login-submit"]}>Log In</button>
                        </div>
                    </form>
                    <p className={styles["login-switch"]}>New here? <a href="/register">Create an account</a></p>
                </div>
            </div>

        </div>
    );

}