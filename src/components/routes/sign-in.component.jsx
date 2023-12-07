import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const redirectResult = async () => await getRedirectResult(auth);
  useEffect(() => {
    async function authenticateUser() {
      const response = await getRedirectResult(auth);
      // console.log(response);
      if (response) createUserDocumentFromAuth(response.user);
    }
    authenticateUser();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Pop Up</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
