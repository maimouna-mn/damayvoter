import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.css']
})
export class VotingPageComponent implements OnInit{
  constructor(private router:Router){}

  ngOnInit(): void {

  }
  valider(imageUrl: string) {
    this.router.navigate(['/confirmVote', { imageUrl }]);
  }

}
