import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisProductsComponent } from './lis-products.component';
import { InformationService } from 'src/app/service/information.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {product}from '../../interface/product.interface'
import { of } from 'rxjs';
describe('LisProductsComponent', () => {
  let component: LisProductsComponent;
  let fixture: ComponentFixture<LisProductsComponent>;
  let services: InformationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisProductsComponent ],
      imports : [BrowserModule,HttpClientModule],
      providers:[InformationService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LisProductsComponent);
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

  it('getProducts', () => {
    let product:product=
       {
        data_releases: '2023-07-06T00:00:00.000+00:00',
        data_revisions:'2024-07-06T00:00:00.000+00:00',
        description: 'prueba tarjeta no valida',
        id: '123',
        logo: 'ww.s.com',
        name: 'prueba'};

    spyOn(services,'getProducts').and.returnValue(of(product))
    component.getProducts();
    expect(component.products).toBe(product);
  });

  it('click', () => {
    component.click('5ad');
    expect(component.tem).toEqual('5ad');
    expect(component.itemId).toBeTrue();
  });

  it('search', () => {
    let product=[
    {
     data_releases: '2023-07-06T00:00:00.000+00:00',
     data_revisions:'2024-07-06T00:00:00.000+00:00',
     description: 'prueba tarjeta no valida',
     id: '123',
     logo: 'ww.s.com',
     name: 'prueba'}];
     component.products = product; 
     component.idSearch = '123';
     component.search();
     expect(component.productSearch).toEqual(product);
  });

  it('click paginator', () => {
    component.clickPaginator();
    expect(component.itemPaginator).toBeTrue();
  });

  it('delete', () => {
    spyOn(services,'deleteProduct').and.returnValue(of(true))
    expect(component.deleteProduct('123')).toBeUndefined();
  });


});
