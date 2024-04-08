import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',
})
export class ViewProductsComponent implements OnInit {
  constructor(private ps: ProductsService, private router: Router) {}
  products: Array<Product>;
  ngOnInit(): void {
    this.ps.getAllProduct().subscribe((data: Product[]) => {
      // console.log(data)
      this.products = data;
    })
  }

  onUpdate(x:Product)
  {
         let prod_json:string=   JSON.stringify(x);
    this.router.navigateByUrl('/inventory/edit/'+prod_json)
  }

  onEdit(prod:Product)
  {
    let prodJson:string=JSON.stringify(prod);
    this.router.navigateByUrl('/inventory/edit/'+prodJson)
  }

  
}
  
  // }
//   onupdate(product: Product) {
//     let prod_json = JSON.stringify(product);
//     this.router.navigateByUrl('/inventory/edit/' + prod_json);
//     window.location.reload();
//   }

//   ondelete(id: any) {
//     this.ps.deleteProduct(id).subscribe();
//     window.location.reload();
//   }
// }
