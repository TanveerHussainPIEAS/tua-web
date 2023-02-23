import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Product } from 'src/app/models/product';
import { ResponsePayloadDTO } from 'src/app/models/ResponsePayloadDTO';
import { AuthenticatedUser, LoginModel } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  loginUser(user:LoginModel): Observable<ResponsePayloadDTO<AuthenticatedUser>> {
    return this.httpClient.post<ResponsePayloadDTO<AuthenticatedUser>>(
      `${environment.tuaApiBaseUrl}/auth/login`,user
    );
  }

  registerNewUser(user: AuthenticatedUser): Observable<ResponsePayloadDTO<AuthenticatedUser>> {
    return this.httpClient.post<ResponsePayloadDTO<AuthenticatedUser>>(
      `${environment.tuaApiBaseUrl}/auth/register`,user
    );
  }

}
