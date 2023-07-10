import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interface/product.interface';
import { InformationService } from 'src/app/service/information.service';

@Component({
  selector: 'app-lis-products',
  templateUrl: './lis-products.component.html',
  styleUrls: ['./lis-products.component.scss']
})
export class LisProductsComponent implements OnInit {
  products :any ;
  productSearch : any;
  itemId :boolean = false;
  tem:string = '';
  idSearch :string ='';
  itemPaginator : boolean = false;
  value : number = 5;
  constructor(private service:InformationService){}

   ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(data=>{
      this.products=data;});   
 }
  
  click(id:string)
  { 
    this.tem = id;
    this.itemId = this.itemId == true? this.itemId=false : this.itemId=true;

  }
  search(){
   this.productSearch = this.products.filter((p:product) => p.id == this.idSearch);
   this.products = this.productSearch.length > 0 ? this.productSearch : this.products;
  }
  clickPaginator()
  {
    this.itemPaginator = this.itemPaginator == true? this.itemPaginator=false : this.itemPaginator=true;
  }
  deleteProduct(id:string){
    this.service.deleteProduct(id).subscribe(data => {console.log(data);});
  }
}
