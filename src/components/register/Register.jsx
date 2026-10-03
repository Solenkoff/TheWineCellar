import styles from "./Register.module.css";

export default function Register() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (

        <div className={styles["page-background"]}>

            <div className={styles["register-overlay"]}>
                <div className={styles["register-modal"]} role="dialog" aria-modal="true" aria-labelledby="register-title">
                    <div className={styles["register-header"]}>
                        <div>
                            <h2 id="register-title">Join the Rescue</h2>
                            <p>Create an account and help furniture find a new home.</p>
                        </div>
                        <button type="button" className={styles["register-close"]} aria-label="Close">×</button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles["register-form-group"]}>
                            <label htmlFor="register-username">Username *</label>
                            <input type="text" id="register-username" name="username" placeholder="Choose a username" required />
                        </div>
                        <div className={styles["register-form-group"]}>
                            <label htmlFor="register-email">Email *</label>
                            <input type="email" id="register-email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className={styles["register-form-group"]}>
                            <label htmlFor="register-password">Password *</label>
                            <input type="password" id="register-password" name="password" placeholder="Create a password" required />
                        </div>
                        <div className={styles["register-form-group"]}>
                            <label htmlFor="register-confirm">Confirm Password *</label>
                            <input type="password" id="register-confirm" name="confirmPassword" placeholder="Repeat your password" required />
                        </div>
                        <div className={styles["register-buttons"]}>
                            <button type="button" className={styles["register-cancel"]} >Cancel</button>
                            <button type="submit" className={styles["register-submit"]}>Create Account</button>
                        </div>
                    </form>
                    <p className={styles["register-switch"]}>Already registered? <a href="/login">Log in</a></p>
                </div>
            </div>
            
        </div>

    );
}
