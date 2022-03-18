const Login = () => {
    return (
        <>
        <div className="auth-container">
            <h2 className="form-heading center-text">Login</h2>
            <form action="">
                <div className="input-group">
                    <label htmlFor="username">Email address</label>
                    <input type="text" name="username" className="textfield" required autocomplete="off" id="username"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password"/>
                </div>
                <div className="choice-group">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember" className="remember">Remember me</label>
                    <a href="" className="forgot-pass">Forgot your Password?</a>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="signup-group">
                <a href="./signup.html" className="signup-link">Create New Account</a>
                <span className="material-icons-outlined">navigate_next</span>
            </div>
        </div>
        </>
    );
}

export {Login};