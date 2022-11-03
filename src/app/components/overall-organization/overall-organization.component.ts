import { Component, OnInit } from '@angular/core';
import{faCheck} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-overall-organization',
  templateUrl: './overall-organization.component.html',
  styleUrls: ['./overall-organization.component.css']
})
export class OverallOrganizationComponent implements OnInit {

  check = faCheck
  
  constructor() { }

  ngOnInit(): void {
  }

}
