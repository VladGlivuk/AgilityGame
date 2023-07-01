import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit {
  @Input() createGameClickHandler: (time: number) => void;
  title: string = 'Agility Game';

  constructor() {}

  ngOnInit(): void {}
}
