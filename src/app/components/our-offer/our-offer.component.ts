import { Component, OnInit } from '@angular/core';
import{faCheck} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-our-offer',
  templateUrl: './our-offer.component.html',
  styleUrls: ['./our-offer.component.css']
})
export class OurOfferComponent implements OnInit {

  check = faCheck

  constructor() { }

  ngOnInit(): void {
  }

}
