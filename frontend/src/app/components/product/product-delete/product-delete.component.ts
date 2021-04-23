import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private productSrvice: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productSrvice.readById(id).subscribe(product => {
      this.product = product;
    });
  }
  
 
  deleteProduct(): void {
    this.productSrvice.delete(this.product.id).subscribe(() => {
      this.productSrvice.showMessage('Produto excluído com sucesso!');
      this.router.navigate(['/products']);
    });
  }
  
 
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
