import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/protuct.interface';
import { ProductService } from '../../service/product.service';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  selectedProducts: { [key: number]: number } = {};

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  onInputChange(product: Product, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const quantity = inputElement.valueAsNumber;
    this.addToCart(product, quantity);
  }
  
  addToCart(product: Product, quantity: number) {
    if (quantity > 0) {
      this.selectedProducts[product.id] = quantity;
    } else {
      delete this.selectedProducts[product.id];
    }
  }

  placeOrder() {
    const order = {
      cantidadProducto: Object.keys(this.selectedProducts).length,
      totalProductos: this.calculateTotal(),
      estado: 'pendiente',
      staffId: 0, // aquí puedes asignar el ID del staff si es necesario
      viewerId: 0, // aquí puedes asignar el ID del viewer si es necesario
      productos: this.getSelectedProducts()
    };

    this.orderService.createOrder(order).subscribe(
      response => {
        console.log('Order created successfully', response);
        this.router.navigate(['/order'], { state: { data: response } });
      },
      error => {
        console.error('Error creating order', error);
      }
    );
  }

  calculateTotal(): number {
    return Object.keys(this.selectedProducts).reduce((total, key) => {
      const productId = parseInt(key);
      const quantity = this.selectedProducts[productId];
      const product = this.products.find(p => p.id === productId);
      return total + (product ? product.precio * quantity : 0);
    }, 0);
  }

  getSelectedProducts(): Product[] {
    return Object.keys(this.selectedProducts).map(key => {
      const productId = parseInt(key);
      const product = this.products.find(p => p.id === productId);
      return { ...product, cantidad: this.selectedProducts[productId] } as Product;
    });
  }
}
