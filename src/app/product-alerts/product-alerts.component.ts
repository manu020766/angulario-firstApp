import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() public product;
  @Output() public notify = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }
  emitNotify() {
    this.notify.emit(this.product.name);
  }
}
