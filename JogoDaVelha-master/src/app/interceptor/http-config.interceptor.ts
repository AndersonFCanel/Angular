import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const timestamp = this.authService.getTimeStamp();
        const authUrl = '&ts=' + timestamp + '&apikey=' + this.authService.getPublicKey() + '&hash=' + this.authService.getHash(timestamp);
        const apiReq = req.clone({ url: req.url + authUrl });
        return next.handle(apiReq);
    }
}
