import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-dehsboard',
  templateUrl: './dehsboard.component.html',
  styleUrls: ['./dehsboard.component.css']
})
export class DehsboardComponent implements OnInit{
  constructor(
    private proService: ProductService
  ) { }


  productList: any[] = [];
  

  ngOnInit(): void {
    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val
    })
  }

  deleteProduct(id: any) {
    this.proService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
})
}

isSidePaneVisible: any;


products: any;
openSidePanel() {
throw new Error('Method not implemented.');
}
closeSidePanel() {
throw new Error('Method not implemented.');
}
productObj: any;

}
