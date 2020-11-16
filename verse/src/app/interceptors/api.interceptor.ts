import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertClientService } from '@trixprod/api-verse-real-estate';
import { AuthApiService } from '../services/auth/api/auth-api.service';
import { LocalStorage } from 'ngx-webstorage';
import { keys } from 'src/assets/appPreferenceKeys';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private refService: AlertClientService) {
    this.oldApiAuthUrl = AuthApiService.API_URL; // api-auth-url
    this.oldApiServicesUrl = this.refService.configuration.basePath; // api-verse-real-estate-url
  }
  private readonly oldApiAuthUrl: string;
  private readonly oldApiServicesUrl: string;

  @LocalStorage(keys.apiServicesUrl)
  private apiServicesUrl: string;
  @LocalStorage(keys.apiAuthUrl)
  private apiAuthUrl: string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;

    // Don't use modified url in prod
    if (environment.production) {
      url = url.replace(this.oldApiServicesUrl, environment.apiServicesUrl).
        replace(this.oldApiAuthUrl, environment.apiAuthUrl);
    } else {
      url = url.replace(this.oldApiServicesUrl, this.apiServicesUrl).
        replace(this.oldApiAuthUrl, this.apiAuthUrl);
    }
    const clone = req.clone({ url });
    return next.handle(clone);
  }
}
