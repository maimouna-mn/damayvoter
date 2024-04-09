import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-vote',
  templateUrl: './confirm-vote.component.html',
  styleUrls: ['./confirm-vote.component.css']
})
export class ConfirmVoteComponent implements OnInit{

    imageUrl!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.imageUrl = params['imageUrl'];
      });
    }
    confirmVote(){
      alert("Vote effectué avec succés.")
    }
  }

