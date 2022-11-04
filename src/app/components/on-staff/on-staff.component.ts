import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-on-staff',
  templateUrl: './on-staff.component.html',
  styleUrls: ['./on-staff.component.css']
})
export class OnStaffComponent implements OnInit {

check = faCheck

  constructor() { }

  ngOnInit(): void {
  }

}
