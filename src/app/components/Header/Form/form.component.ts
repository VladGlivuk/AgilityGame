import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//constants
import { defaultTime } from 'src/app/core/constants';

@Component({
  selector: 'header-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class HeaderForm implements OnInit {
  @Input() createGameClickHandler: (time: number) => void;
  timeValue: number = defaultTime;

  constructor() {}

  submitClickHandler(form: NgForm) {
    if (form.valid) this.createGameClickHandler(form.value.time);
  }

  ngOnInit(): void {}
}
