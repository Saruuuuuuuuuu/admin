import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products!: any[];

  title = 'admin';
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
