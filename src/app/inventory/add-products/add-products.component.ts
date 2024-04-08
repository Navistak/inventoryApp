import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ps: ProductsService,
    private ActiveRoute: ActivatedRoute) { }
  productForm: FormGroup;
  
  flag: boolean = false;
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [],
      productName: [],
      productPrice: [],
      productColor: [],
      availableQuantity: [],
      supplier: this.fb.group(
        {
        supplierName: [],
        supplierEmail: [],
        supplierAddress: [],
        pinCode: [],
      }
      )
    }
    );
        this.getEditData()
  }
  onSubmit() 
  {
        if(this.flag)
        {
          this.ps.updateProduct(this.productForm.value).subscribe();
          alert('product details updated...!')
        }
        else
        {
          this.ps.saveProduct(this.productForm.value).subscribe();
          alert('Product details saved..!')
        }
    }
  
   getEditData() {
    this.ActiveRoute.paramMap.subscribe(
      param=> {
                let prod_json: string = param.get('data')
           if (prod_json != null) 
           {
                let product: Product = JSON.parse(prod_json);
                this.productForm.patchValue(product);
                this.flag = true;
     }
    
    }
  )
}

}
