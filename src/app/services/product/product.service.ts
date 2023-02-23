
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Product } from 'src/app/models/product';
import { ResponsePayloadDTO } from 'src/app/models/ResponsePayloadDTO';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<ResponsePayloadDTO<Product[]>> {
    return this.httpClient.get<ResponsePayloadDTO<Product[]>>(
      `${environment.tuaApiBaseUrl}/products`
    );
  }

  getAllProductById(id:number): Observable<ResponsePayloadDTO<Product>> {
    return this.httpClient.get<ResponsePayloadDTO<Product>>(
      `${environment.tuaApiBaseUrl}/products/${id}`
    );
  }

  // getAllGlobelActivities(): Observable<ResponsePayloadDTO<Activity[]>> {
  //   return this.httpClient.get<ResponsePayloadDTO<Activity[]>>(
  //     `${environment.configurationsApiBaseUrl}/activities`
  //   );
  // }

  // getCurrencies(): Observable<ResponsePayloadDTO<Currency[]>> {
  //   return this.httpClient.get<ResponsePayloadDTO<Currency[]>>(
  //     `${environment.configurationsApiBaseUrl}/currencies`
  //   );
  // }

  // updateActivity(activity: Activity): Observable<ResponsePayloadDTO<boolean>> {
  //   return this.httpClient.put<ResponsePayloadDTO<boolean>>(
  //     `${environment.projectApiBaseUrl}/contract-activities`,
  //     activity
  //   );
  // }

  // getActivityCategories(): Observable<ResponsePayloadDTO<ActivityCategory[]>> {
  //   return this.httpClient.get<ResponsePayloadDTO<ActivityCategory[]>>(
  //     `${environment.configurationsApiBaseUrl}/activitycatagories`
  //   );
  // }

  // getActivityStatuses(): Observable<ResponsePayloadDTO<ActivityStatus[]>> {
  //   return this.httpClient.get<ResponsePayloadDTO<ActivityStatus[]>>(
  //     `${environment.configurationsApiBaseUrl}/activity-statuses`
  //   );
  // }

  // saveActivity(activity: Activity): Observable<ResponsePayloadDTO<number>> {
  //   return this.httpClient.post<ResponsePayloadDTO<number>>(
  //     `${environment.projectApiBaseUrl}/contract-activities`,
  //     activity
  //   );
  // }

  // deleteActivityByActivityId(
  //   id: number
  // ): Observable<ResponsePayloadDTO<boolean>> {
  //   return this.httpClient.delete<ResponsePayloadDTO<boolean>>(
  //     `${environment.projectApiBaseUrl}/contract-activities/${id}`
  //   );
  // }
  // getActivityTypes(): Observable<ResponsePayloadDTO<ActivityType[]>> {
  //   return this.httpClient.get<ResponsePayloadDTO<ActivityType[]>>(`${environment.configurationsApiBaseUrl}/activities/types`);
  // }
}
