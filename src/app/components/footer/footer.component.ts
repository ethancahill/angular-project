import { Component, OnInit } from '@angular/core';
import {
  faI,
  faLink,
  faPhone,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  phone = faPhone;
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedin;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  returnHome() {
    this.router.navigateByUrl('');
    window.scrollTo(0, 0);
  }
}
