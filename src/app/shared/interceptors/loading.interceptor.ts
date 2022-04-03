import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
// ინტერსეპტორი ნებისმიერი HTTP ქოლისთვის, სანამ შესრულდება სპინერის ჩვენებისთვის
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.loading();
    return next.handle(request).pipe(
      finalize(() => {
        this.spinnerService.idle();
      })
    )
  }
}
