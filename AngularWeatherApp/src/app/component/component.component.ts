import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  myForm: FormGroup;
  showAddRepositoryPopup: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      jiraConnection: new FormControl('', Validators.required),
      jiraProject: new FormControl('', Validators.required),
      implementationType: new FormControl('', Validators.required),
      github: new FormControl('', Validators.required),
      githubRepository: new FormControl('', Validators.required),
      newRepositoryName: new FormControl(''),
      packageName: new FormControl('', Validators.required),
      userStories: new FormControl('', Validators.required)
    });
  }

  openAddRepositoryPopup(): void {
    this.showAddRepositoryPopup = true;
  }

  saveNewRepository(): void {
    // Save new repository logic
  }

  generateAngularCode(): void {
    // Generate Angular code logic
  }
}