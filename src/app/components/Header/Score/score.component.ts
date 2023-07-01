import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class Score implements OnInit {
  playerScore: number = 0;
  computerScore: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
