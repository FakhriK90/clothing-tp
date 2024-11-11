import "./signInUp.styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase.utils";

const Register = () => {
  /* Creation of user*/

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
      console.log(user);
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
        console.log("Email already in use");
      } else {
        alert("OOps! user didn't created :(", error.message);
        console.log("OOps! user didn't created :(", error.message);
      }
    }
  };

  return (
    <div id="container" className="containerSignInUp">
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
                    <Link to="/signIn">
                      <button type="submit">Register</button>
                    </Link>
                    <div className="register-link">
                      <span>Already have an account? </span>
                      <b className="pointer">Sign in here</b>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
