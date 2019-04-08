import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelect } from '@angular/material';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'fiz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  @Input() options: Option;
  @Output() triggerValue = new EventEmitter<string>();
  selected: string;
  changesValue(select: MatSelect) {
   this.triggerValue.emit(select.triggerValue);
  }
  ngOnInit() {
    this.selected = this.options[0].value;
  }
}

