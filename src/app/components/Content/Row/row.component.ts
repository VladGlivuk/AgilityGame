import { Component, Input, OnInit } from '@angular/core';
//types
import { Row } from 'src/app/core/types';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowItem implements OnInit {
  @Input() row: Row = [];

  constructor() {}

  ngOnInit(): void {}
}
