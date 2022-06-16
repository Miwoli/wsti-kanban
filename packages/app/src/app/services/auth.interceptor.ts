import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { TokenStorageService } from './token-storage.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private tokenHeader = 'Authorization'
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let authReq = request
    const token = this.tokenStorageService.getToken()

    if (!!token)
      authReq = request.clone({
        headers: request.headers.set(this.tokenHeader, `Bearer ${token}`),
      })
    return next.handle(authReq)
  }
}
