import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fiz-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {
  @Input() subject: string;
  @Input() genre: string;
  @Input() grade: string;
  @Input() price: string;
  @Input() priceBonus: string;
  checked = false;
}
