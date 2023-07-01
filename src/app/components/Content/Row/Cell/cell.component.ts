import { Component, Input, OnInit } from '@angular/core';
//types
import { Cell } from 'src/app/core/types';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellItem implements OnInit {
  @Input() cell: Cell;

  constructor() {}

  ngOnInit(): void {}
}
