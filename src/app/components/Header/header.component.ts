import { Component, Input, OnInit } from '@angular/core';
//types
import { ScoreValue } from 'src/app/core/types';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit {
  @Input() score: ScoreValue;
  @Input() createGameClickHandler: (time: number) => void;
  title: string = 'Agility Game';

  constructor() {}

  ngOnInit(): void {}
}
