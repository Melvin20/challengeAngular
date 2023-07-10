import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

  constructor(
  ) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: new HttpHeaders({})
    });


    request = request.clone({
      setHeaders: {
        authorId: '123456789'// para poder consumir todo lo q creo con este id, por motivo del servicio no es conveniente generar un author id aleatorio
      }
    });

    return next.handle(request);
  }
  
}
