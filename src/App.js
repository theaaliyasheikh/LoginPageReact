import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <div className="loginContainer">
          <div className="left">
            <h1>Welcome to website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
          <div className="right">
            <h1>USER LOGIN</h1>
            <form className="loginForm">
              <div><input type="text" /></div>
              <div><input type="password" /></div>
              <div className="others">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div><button type="button" className="btn btn-primary">Login</button></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
