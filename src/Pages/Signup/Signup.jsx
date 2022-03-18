import styles from "./Signup.module.css";
const Signup = () =>{
    return(
        <>
        <div className="auth-container">
            <h2 className="center-text">Signup</h2>
            <form action="">
                <div className={styles.name_container}>
                    <div className="input-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" className={styles.fname} required autoComplete="off" id="first_name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" className={styles.lname} required autoComplete="off" id="last_name"/>
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" className="textfield" required autoComplete="off"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" required id="confirm_password"/>
                </div>
                <div className="choice-group">
                    <span className="choice-check">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">I accept all Terms &#38; Conditions</label>
                    </span>
                </div>
                <button type="submit" className="btn btn-primary">Create New Account</button>
            </form>
            <div className="signup-group">
                <a href="./login.html" className="signup-link">Already have an account</a>
                <span className="material-icons-outlined">navigate_next</span>
            </div>
        </div>
        </>
    );
}

export {Signup};