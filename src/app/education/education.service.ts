import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { DataService } from '../shared/data.service';
import { Education } from './education.model';

@Injectable()
export class EducationService {
  schoolsChanged = new Subject<any[]>(); //to be emitted in edit component

  private educationList = [ 
    {schoolName: '', gradDate: null, degreeType: '', fieldName: '' }
  ];
  private educationEndpoint = 'education.json';
  

  constructor(private dataService: DataService) {}


  // -----communicate with server-----
  saveEducation() {
    this.dataService.saveData(this.educationEndpoint, this.educationList);
  }
  
  fetchEducation() {
    this.dataService.getData(this.educationEndpoint).subscribe(
      (response: Response) => { 
        if (response.json()) {
          this.educationList = response.json(); 
        } else { console.log('no list on server');}
        this.schoolsChanged.next(this.educationList); 
      }
    );
    
  }

  // ------ communicate with other components -----
  getEducation() {
    return this.educationList.slice(); // copy to be used in edit
  }

  // update whole list
  updateEducation(schools: Education[]) {
    this.educationList = schools;
    //send the new list to the listeners in the component
    this.schoolsChanged.next(this.educationList); 
    this.saveEducation();
  }


}