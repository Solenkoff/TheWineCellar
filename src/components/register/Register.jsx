import { Link, useNavigate } from "react-router";

import styles from "./Register.module.css";

export default function Register({
    onRegister,
}) {
    const navigate = useNavigate();
 
    const registerAction = (formData) => {

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password")

        if (!username || !email || !password || !confirmPassword) {
            alert('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        onRegister({ username, email, password });
    };

    const cancelHandler = () => {
        navigate('/');
    };

    return (

        <div className={styles["page-background"]} >

            <div className={styles["register-overlay"]}>
                <div className={styles["register-modal"]} role="dialog" aria-modal="true" aria-labelledby="register-title">
                    <div className={styles["register-header"]}>
                        <div>
                            <h2 id="register-title">Join the Rescue</h2>
                            <p>Create an account and help furniture find a new home.</p>
                        </div>
                        <button
                            type="button"
                            className={styles["register-close"]}
                            aria-label="Close"
                            onClick={cancelHandler}
                        >
                            ×
                        </button>
                    </div>

                    <form action={registerAction}>
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
                            <input type="password" id="register-confirm" name="confirm-password" placeholder="Repeat your password" required />
                        </div>
                        <div className={styles["register-buttons"]}>
                            <button
                                type="button"
                                className={styles["register-cancel"]}
                                onClick={cancelHandler}
                            >
                                Cancel
                            </button>
                            <button type="submit" className={styles["register-submit"]}>Create Account</button>
                        </div>
                    </form>
                    <p className={styles["register-switch"]}>Already registered?
                        <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>

        </div>

    );
}
