import { TestBed } from '@angular/core/testing';
import { InformationService } from './information.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { product } from '../interface/product.interface';

describe('InformationService', () => {
  let service: InformationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule ],
    })

    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get product', () => {
    let product:product=
    {
     data_releases: '2023-07-06T00:00:00.000+00:00',
     data_revisions:'2024-07-06T00:00:00.000+00:00',
     description: 'prueba tarjeta no valida',
     id: '123',
     logo: 'ww.s.com',
     name: 'prueba'};
    spyOn(service,'getProducts').and.returnValue(of(product));
    service.getProducts().subscribe(data => {expect(data).toBe(product);})
    
  });
  
  it('post product', () => {
    let product:product=
       {
        data_releases: '2023-07-06T00:00:00.000+00:00',
        data_revisions:'2024-07-06T00:00:00.000+00:00',
        description: 'prueba tarjeta no valida',
        id: '123',
        logo: 'ww.s.com',
        name: 'prueba'};
      spyOn(service,'postProducts').and.returnValue(of(product));
      service.postProducts(product).subscribe((data:any) => {expect(data).toBe(product);})
      
    });
    it('verification product', () => {
        spyOn(service,'getProducts').and.returnValue(of(true));
        service.verificationProducts('123').subscribe((data:any) => {expect(data).toBe(true);})
        
      });
});
