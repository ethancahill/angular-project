import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-departments',
  templateUrl: './tech-departments.component.html',
  styleUrls: ['./tech-departments.component.css']
})
export class TechDepartmentsComponent implements OnInit {

  check = faCheck
  constructor() { }

  ngOnInit(): void {
  }

}
