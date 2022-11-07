import { Component, OnInit } from '@angular/core';
import { faI, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  phone = faPhone;
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
