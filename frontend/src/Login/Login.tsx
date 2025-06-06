import './Login.css';
import { useState } from "react";
import {
    Container,
    TextField,
    Button,
  } from "@mui/material";
import { setUser } from '../UserStorage/UserStorage';
import { ROUTE } from '../Constant';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    let navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(email)
      if (!email) {
        setEmailError(true)
        return false
      }
      else if (!password) {
        setPasswordError(true)
        return false
      }
      console.log(window.location.href)
      setUser("Test User")
      navigate(ROUTE.HOME)
      return true
      // checks for passw
    };
    // postMessage https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
    
    return (
    <div className="Login">
      {/* This is the page content. This will used as the template */}
      <header className="Login-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Login
        </h1>

      </header>
      {/* <div className="TxtComp"> */}
      <Container maxWidth="sm">
      <form onSubmit={handleLogin} autoComplete='off'>
        <TextField
            error={emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <TextField
          error={passwordError}
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // onClick={handleLogin}
          color="primary"
          type="submit"
        >
          Login
        </Button>
        </form>
        </Container>
      {/* </div> */}
    </div>
  );
}

export default Login;