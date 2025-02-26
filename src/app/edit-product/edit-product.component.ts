import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Import ProductService
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  id!: any;
  productData: any 


  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router : Router,
    private route : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['pid'];
    this.productService.getById(this.id).subscribe((val: any) => {
      this.productData = val;
      this.productForm.patchValue(this.productData);
    })
  }


  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    productName : new FormControl(),
    category : new FormControl(),
    price : new FormControl(),
    stock : new FormControl(),
    status : new FormControl(),
    image : new FormControl(),


  })
  onSubmit() {
  this.productService.updateData(this.productForm.value).subscribe((val: any)=>{
    this.router.navigateByUrl('/deshboard')
    console.log("Created Successfully");
    
  })
  }
}
