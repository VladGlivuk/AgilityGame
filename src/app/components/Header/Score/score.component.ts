import { Component, Input, OnInit } from '@angular/core';
//types
import { ScoreValue } from 'src/app/core/types';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class Score implements OnInit {
  @Input() score: ScoreValue;

  constructor() {}

  ngOnInit(): void {}
}
