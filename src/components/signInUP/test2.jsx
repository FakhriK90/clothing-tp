import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signInWithEmailPassword } from '../../utils/firebase/Firebase.utils';

const SignInUp = () => {
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const userCredential = await signInWithEmailPassword(email, password);
      if (userCredential) {
        alert('User signed in');
        console.log('User signed in:', userCredential.user);
        setCurrentUser(userCredential.user);
        resetFields();
      } else {
        console.log('No user credential returned');
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email and password.");
        console.log("User not found. Please check your email and password.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
        console.log("Incorrect password. Please try again.");
      } else {
        alert("An error occurred during sign-in: " + error.message);
        console.log("An error occurred during sign-in:", error.message);
      }
    }
  };

  const resetFields = () => {
    document.getElementById('signInForm').reset();
  };

  return (
    <form id="signInForm" onSubmit={handleSubmitSignIn}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInUp;