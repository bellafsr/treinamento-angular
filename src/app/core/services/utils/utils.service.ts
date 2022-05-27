import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(requestUrlArray: string[]): Observable<any> {
    let observablesArray: Observable<any>[] = [];
    
    requestUrlArray.forEach(url => {
      observablesArray.push(this.http.get(url));
    });

    return combineLatest(observablesArray);
  }
}
