import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {InformationService} from  'src/app/service/information.service'
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
 formGroup!: FormGroup;
 dateR:string = '';
 dateL:string = '';
 id:any = false;

 
  constructor(
    private formBuilder: FormBuilder,
    private informationService: InformationService,
  ) { }

  ngOnInit(): void {
    this.setForm();
  }
  setForm(): void{
    this.formGroup = this.formBuilder.group({
    id: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10),this.validateId.bind(this)]],
    name: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    description: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(200)]],
    logo:  ['',[Validators.required]],
    date_release : ['',[Validators.required,this.validateDate]],
    date_revision:['',],
    });
   }
  
   setValue(){
    let array=this.dateL.split('-');
    this.dateR = (Number(array[0])+1)+'-'+array[1]+'-'+array[2];
    this.formGroup.value.date_revision=this.dateR;
  }

 validateDate(date:AbstractControl):ValidationErrors | null {
     let error = null;
     let value=date.value;
     const actual= new Date();
     let month = actual.getMonth()<10? '0'+(actual.getMonth()+1): (actual.getMonth()+1);
     let day = actual.getDay()<10? '0'+(actual.getDay()+2): (actual.getDay()+2);
     let result =  actual.getFullYear() + '-' + month + '-' + day;  
     error = value < result ?{ validateDate:true}:null; 
     return error;
  }

   validateId(id:AbstractControl):ValidationErrors | null {
    let error = null;
    this.isValid(id.value);
    error = this.id==true?{validateId:true}:null    
    return error;
 }
   isValid(id:string){
      this.informationService.verificationProducts(id).subscribe(result => this.id=result);
   }
  send(){
   this.informationService.postProducts(this.formGroup.value).subscribe(data=>{});
   this.reset();
  }
  reset(){
    this.dateL='';
    this.dateR='';
    this.id=false;
    this.formGroup.reset();
  }
}
