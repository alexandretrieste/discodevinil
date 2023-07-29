import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^(?!\\s)[A-Za-zÀ-ÿ ]*$')]],
    address: ['', [Validators.required, Validators.pattern('^(?!\\s)[A-Za-z0-9,À-ÿ ]*$')]]
  });  

  entity: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
  
  }

  onSubmit(): void {
  
    this.items = this.cartService.clearCart();

    const nameValue = this.checkoutForm.get('name')?.value;
    const addressValue = this.checkoutForm.get('address')?.value;

    if (nameValue && addressValue) {
      const entity = {
        name: nameValue,
        address: addressValue,
      };

      localStorage.setItem('entity', JSON.stringify(entity));
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
  }

  get isNameInvalid(): boolean {
    const nameControl = this.checkoutForm.get('name');
    return nameControl!.invalid && (nameControl!.dirty || nameControl!.touched);
  }

  get isAddressInvalid(): boolean {
    const addressControl = this.checkoutForm.get('address');
    return addressControl!.invalid && (addressControl!.dirty || addressControl!.touched);
  }
}