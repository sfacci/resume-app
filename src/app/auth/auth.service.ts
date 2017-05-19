import * as firebase from 'firebase';

export class AuthService {
  private userIsSignedIn = false;
  private token = '';
   //private apiKey = 'your API Key here';
  // private authDomain = 'yourDBname.firebaseapp.com';


  // required before making any further authentication attempts
  intializeApp() {
    firebase.initializeApp({ apiKey: this.apiKey , authDomain: this.authDomain } ); 
  }
 
  // sign in
  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( 
       response => { 
         this.userIsSignedIn = true;
         firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )  
       }
      )
      .catch(
      (error: Error) => {
        console.log(error.message);
        //TODO: handle error 
      }
    );
    
  }

  // sign out
  signOutUser() {
   firebase.auth().signOut().then().catch(); 
    this.userIsSignedIn = false;
  }

  // update stored token and return to calling method
  // need to look into the proper way to refresh tokens
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  // returns promise
  isUserSignedIn() {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => { resolve(user ? true : false); }
        );
      }
    );
  }

 
  
} 