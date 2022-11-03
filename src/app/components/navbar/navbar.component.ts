import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faArrowRight, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() btnClick = new EventEmitter

  arrowRight = faArrowRight;
  pencil = faPenToSquare

  constructor() {}

  ngOnInit(): void {}

  onClick() { 
    this.btnClick.emit();
  }
}
