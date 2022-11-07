import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consult-button',
  templateUrl: './consult-button.component.html',
  styleUrls: ['./consult-button.component.css']
})
export class ConsultButtonComponent implements OnInit {

  constructor(private router: Router ) {}

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl('form')
  }

}
