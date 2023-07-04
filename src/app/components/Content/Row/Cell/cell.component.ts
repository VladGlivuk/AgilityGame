import { Component, ElementRef, Input, OnInit } from '@angular/core';
//types
import { Cell } from 'src/app/core/types';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellItem implements OnInit {
  @Input() activeCellId: string | null;
  @Input() cell: Cell;

  constructor(private elementRef: ElementRef) {}

  cellClickHandler() {
    if (this.activeCellId === this.cell.id) {
      const event: CustomEvent<Cell> = new CustomEvent('onCellChangeHandler', {
        bubbles: true,
        detail: this.cell,
      });

      this.elementRef.nativeElement.dispatchEvent(event);
    }
  }

  ngOnInit(): void {}
}
