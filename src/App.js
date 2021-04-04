import './App.css';
import {useState , useEffect} from 'react'
import fire from './fire'
import Login from './Login';
import Hero from './Hero';



const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

  const clearInputs = () => {
    setUser('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) =>{
      switch(error.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(error.message);
              break;
            case "auth/wrong-password":
              setPasswordError(error.message);
              break;
      }
    })
  };

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) =>{
      switch(error.code){
        case "auth/invalid-email":
          case "auth/email-already-in-use":
              setEmailError(error.message);
              break;
            case "auth/weak-password":
              setPasswordError(error.message);
              break;
      }
    })
  }

  const handleLogout = () =>{
    fire.auth().signOut();
  }

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user=>{
      console.log(user);
      if(user){
        alert("hi")
        setUser(user);
        clearInputs();
      }
      else{
        setUser('');
      }
    })
  }

  useEffect(() => {
    console.log(user);
    authListener();
  },[]);
  return ( 
    <div className = "App" >
    {
      user?(
        <Hero  handleLogout={handleLogout}/>):
      (
        <Login 
        user={user}
        setUser={setUser}
        email={email} 
    setEmail={setEmail} 
    password={password} 
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleLogout={handleLogout}
    handleSignup={handleSignup}
    hasAccount={hasAccount}
    setHasAccount={setHasAccount} 
    emailError={emailError}
    passwordError={passwordError}
    />
      )
    }


    </div>
  );
}

export default App;