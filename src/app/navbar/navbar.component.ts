import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {

  }
  @Input() showBackArrow: boolean = false;
  goBack(url:any) {
    this.router.navigate([url]);
  }
  valider() {
    this.router.navigate(['/votingPage']);
  }
}
