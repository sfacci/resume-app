import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { EducationService } from '../education.service';
import { Education } from '../education.model';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  educationForm: FormGroup;
  schoolMasterList: Education[] = []; // to be retrieved from main component

  constructor(private educService: EducationService,
              private router: Router,
              private route: ActivatedRoute) {  }


   ngOnInit() {
    // get the list from the server
    this.schoolMasterList = this.educService.getEducation();

    const schools = new FormArray([]);

    this.educationForm = new FormGroup({
      schoolList: schools
    });

    // create the form rows
    for (const s of this.schoolMasterList) {
      schools.push(
        new FormGroup({
          'schoolName': new FormControl(s.schoolName, Validators.required),
          'gradDate': new FormControl(s.gradDate, Validators.required)
        })
      );
    }
  }

  onSubmit() {
    // update local copy of data
    this.schoolMasterList = this.educationForm.get('schoolList').value;

    // send data back to server and refresh main component
    this.educService.updateEducation(this.schoolMasterList);

    // navigate back to main component
    this.router.navigate(['..'], {relativeTo: this.route});

  }

  // create a new form row
  onAddNew() {
    (<FormArray>this.educationForm.get('schoolList')).push(
      new FormGroup({
        'schoolName': new FormControl(null, Validators.required),
        'gradDate': new FormControl(null, Validators.required)
      })
    );
  }

}
