import { Component, OnInit, Pipe, OnChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, Event, RoutesRecognized, ActivatedRoute } from '@angular/router';

import { EducationService } from '../education.service';
import { AuthService } from '../../auth/auth.service';

import { Education } from '../education.model';



import * as firebase from 'firebase';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schoolMasterList: Education[] = []; // to be retrieved from server
  schoolsChangedSubscription: Subscription;
  userIsSignedIn = false;
  
  constructor(private educService: EducationService,
             private authService: AuthService,
             private router: Router,
             private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      user => { this.userIsSignedIn = user ? true : false;
    });

    // load initial data from server
    this.educService.fetchEducation();

    // update the local list whenever the list changes in the edit component
    this.schoolsChangedSubscription = this.educService.schoolsChanged.subscribe(
      (schoolList: Education[]) => {
        this.schoolMasterList = schoolList;
      }
     );
  }


  OnDestroy() {
    this.schoolsChangedSubscription.unsubscribe();
  }



}

