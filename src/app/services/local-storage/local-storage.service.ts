import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private storage: StorageMap) {}

  setItem(key: string, value: any): void {
    this.storage.set(key, value).subscribe(() => {
      // console.log(`Value with key ${key} stored successfully`);
    });
  }

  getItem(key: string): Observable<any> {
    return this.storage.get(key);
  }

  removeItem(key: string): void {
    this.storage.delete(key).subscribe(() => {
      console.log(`Value with key ${key} removed successfully`);
    });
  }
}
