// import "./Signup.css";
const Signup = () =>{
    return(
        <>
        <div className="auth-container">
            <h2 className="form-heading">Signup</h2>
            <form action="">
                <div className="name-container">
                    <div className="input-group">
                        <label for="first_name">First Name</label>
                        <input type="text" name="first_name" className="name" required autocomplete="off" />
                    </div>
                    <div className="input-group">
                        <label for="last_name">Last Name</label>
                        <input type="text" name="last_name" className="name" required autocomplete="off" />
                    </div>
                </div>
                <div className="input-group">
                    <label for="email">Email address</label>
                    <input type="text" name="email" className="textfield" required autocomplete="off" />
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="input-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" required />
                </div>
                <div className="choice-group">
                    <span className="choice-check">
                        <input type="checkbox" name="terms" id="terms" />
                        <label for="terms">I accept all Terms & Conditions</label>
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

export default Signup;