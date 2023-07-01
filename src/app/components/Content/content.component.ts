import { Component, Input, OnInit } from '@angular/core';
//types
import { GridCells } from 'src/app/core/types';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class Content implements OnInit {
  @Input() grid: GridCells = [];

  constructor() {}

  ngOnInit(): void {}
}
