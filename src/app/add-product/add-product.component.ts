import { Component, OnInit } from '@angular/core';
 // Import the service
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{


  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router : Router
  ) {}
  ngOnInit(): void {
  }


  productForm: FormGroup = new FormGroup({
    productName: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  
  onSubmit() {
    this.productService.addProduct(this.productForm.value).subscribe((val: any) => {
      console.log("Created Successfully");
      
      // Reset form after save
      this.productForm.reset();
  
      // Navigate to Dashboard after saving
      this.router.navigateByUrl('/deshboard');
    });
  }
  
}
