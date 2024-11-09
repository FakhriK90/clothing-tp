import "./signInUp.styles.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGoogleAPopup,
  createAuthUserWithEmailAndPassword,
  signInWithEmailPassword,
} from "../../utils/firebase/Firebase.utils";
import { UserContext } from "../../contexts/user.context"

// const defaultFormFields = {
//   fullName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

const SignInUp = () => {
  /* Creation of user*/

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {setCurrentUser} = useContext(UserContext);

  const resetFields = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  /* Sign up with email and password*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { fullName });
      alert("User created successfully");
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("OOps! user didn't created :(", error.message);
      }
    }
  };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

  /* Google sign in*/
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogleAPopup();
    //
    await createUserDocumentFromAuth(user);
  };

  /* Sign in with email and password */


  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log('Email:', email.value);
    console.log('Password:', password.value);
    try {
      const userCredential = await signInWithEmailPassword(email, password);
      if (userCredential) {
        alert('User signed in');
        console.log('User signed in:', userCredential.user);
        setCurrentUser(userCredential.user);
        resetFields();
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email and password.");
        console.log("User not found. Please check your email and password.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
        console.log("Incorrect password. Please try again.");
      } else {
        alert("An error occurred during sign-in:", error.message);
        console.log("An error occurred during sign-in:", error.message);
      }
    }
  };

  /* Toggle from sign in to sign up*/
  const [signIn, setSignIn] = useState(true);

  const toggle = () => {
    setSignIn(!signIn);
  };

  return (
    <div
      id="container"
      className={`containerSignInUp ${signIn ? "sign-in" : "sign-up"}`}
    >
      <div className="contain">
        <div className="row">
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="login-box" id="signInUp">
                <form action="" onSubmit={handleSubmit}>
                  <h2>Sign Up</h2>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="person"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        required
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <label htmlFor="text">Full Name</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="mail"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="password">Confirm password</label>
                    </div>
                  </div>
                  <div className="btn-submit">
                  <button onClick={toggle} type="submit">Sign up</button>
                    <div className="register-link">
                      <span>Already have an account? </span>
                      <b onClick={toggle} className="pointer">
                        Sign in here
                      </b>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
          <div className="col align-items-center flex-col sign-up" id="signIn" >
            <div className="form-wrapper align-items-center">
              <div className="login-box">
                <form action="" 
                onSubmit={handleSubmitSignIn}
                >
                  <h2>Sign In</h2>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="mail"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <div className="input-wrapper">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="btn-submit">
                  <Link to="">
                  <button type="submit">Sign in</button>
                  </Link>
                    <div className="register-link">
                      <span>Don&apos;t have an account? </span>
                      <b onClick={toggle} className="pointer">
                        Sign up here
                      </b>
                    </div>
                  </div>
                  <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                      <button
                        onClick={logGoogleUser}
                        className="social-button google"
                        title="Sign in with Google"
                      >
                        <svg
                          className="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 488 512"
                        >
                          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                      </button>
                      <button
                        className="social-button apple"
                        title="Sign in with Apple"
                      >
                        <svg
                          className="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
