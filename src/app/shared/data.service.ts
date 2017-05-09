import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class DataService {
  private url = 'https://resumeapp-a15bc.firebaseio.com/';

  constructor(private http: Http, private authService: AuthService) {  }
  
  //send data -- put to overwrite - need to be logged in
  saveData(endpoint: string, data: any[]) {
  
    //returns promise
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          // console.log(token);
        this.http.put(this.url + endpoint + '?auth=' + token, data).subscribe(
          (response: Response) => { 
          //  console.log(response.json()); 
          }
        );
        }
      ).catch( (error) => {console.log(error.message);} );
  }
  
  //retrieve data - don't need to be logged in
  getData(endpoint: string) {
    //returns observable
    return this.http.get(this.url + endpoint);
  }
  
}