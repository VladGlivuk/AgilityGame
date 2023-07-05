import { Component, Input, OnInit } from '@angular/core';
//types
import { Row } from 'src/app/core/types';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
})
export class RowItem implements OnInit {
  @Input() activeCellId: string | null;
  @Input() row: Row = [];

  constructor() {}

  ngOnInit(): void {}
}
