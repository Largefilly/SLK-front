import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';
import { Order } from '../../interface/order.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService, private router: Router) {
    this.order = history.state.data;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
      this.cancelOrder();
    }, 600000); // 10 minutos en milisegundos
  }

  confirmOrder() {
    this.orderService.createOrder(this.order).subscribe(() => {
      alert('Gracias por su compra');
      this.router.navigate(['/home']);
    });
  }

  cancelOrder() {
    alert('Orden cancelada');
    this.router.navigate(['/home']);
  }
}
