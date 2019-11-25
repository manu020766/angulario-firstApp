import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms' 

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems()

    this.checkoutForm = this.formBuilder.group({
      name: '',
      adress: ''
    })
  }

  onSubmit(customerData) {
    console.log('Your order has been submitted', customerData)

    this.cartService.clearCart()
    this.checkoutForm.reset()
  }

}
