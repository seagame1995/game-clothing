import { signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUPForm from "../../components/sign-up-form/sign-up-form.componet";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>This is sign in page</h1>
            <button onClick={logGoogleUser} >Sign in with google popup</button>
            <SignUPForm/>
        </div>
        
    );
}

export default SignIn;