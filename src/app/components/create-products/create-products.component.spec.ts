import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder,FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CreateProductsComponent } from './create-products.component';
import { InformationService } from 'src/app/service/information.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { of } from 'rxjs';

describe('CreateProductsComponent', () => {
  let component: CreateProductsComponent;
  let fixture: ComponentFixture<CreateProductsComponent>;
  let services: InformationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductsComponent ],
      imports :[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule],
      providers :[InformationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductsComponent);
    component = fixture.componentInstance;
    services  = TestBed.inject(InformationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('setForm', () => {
    let id = component.formGroup.controls['id'];
    let name = component.formGroup.controls['name'];
    let description = component.formGroup.controls['description'];
    let logo = component.formGroup.controls['logo'];
    let date_release = component.formGroup.controls['date_release'];
    let date_revision = component.formGroup.controls['date_revision'];

    id.setValue('123fg');
    name.setValue('prueba');
    description.setValue('tarjeta no valida');
    logo.setValue('www.example.com');
    date_release.setValue('01-01-2023');
    date_revision.setValue('01-01-2024');

    expect(id.valid).toBeTrue();
    expect(id.value).toEqual('123fg');
    expect(name.valid).toBeTrue();
    expect(name.value).toEqual('prueba');
    expect(description.valid).toBeTrue();
    expect(description.value).toEqual('tarjeta no valida');
    expect(logo.valid).toBeTrue();
    expect(logo.value).toEqual('www.example.com'); 
    expect(date_release.valid).toBeFalsy();
    expect(date_release.value).toEqual('01-01-2023');
    expect(date_revision.valid).toBeTrue();
    expect(date_revision.value).toEqual('01-01-2024');
    expect(component.setForm()).toBeUndefined();
  });

  it('setValue', () => {
    component.dateL = '1-1-2023'
    component.setValue();
    expect(component.formGroup.value.date_revision).toEqual('2-1-2023');
  });

  it('validateDate ', () => {
    let date_release = component.formGroup.controls['date_release'];
    spyOn(services,'verificationProducts').and.returnValue(of(true));
    date_release.setValue('10-12-2023');
    expect(component.validateDate(date_release)).toEqual({ validateDate: true });   
  });

  it('validateId ', () => {
    let id = component.formGroup.controls['id'];
    spyOn(services,'verificationProducts').and.returnValue(of(true));
    id.setValue('123Prueba');
    expect(component.validateDate(id)).toEqual({ validateDate: true });   
  });

  it('send ', () => {
    spyOn(services,'postProducts').and.returnValue(of({ status:200}));
    expect(component.send()).toBeUndefined();       
  });

  it('reset ', () => {
    spyOn(services,'verificationProducts').and.returnValue(of(true));
    expect(component.reset()).toBeUndefined();       
  });



});
