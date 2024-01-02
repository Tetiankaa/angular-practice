import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {IWish} from "../../app/interfaces/IWish";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private httpClient:HttpClient) { }

  getWishes(): Observable<IWish[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({
        fromObject: {
          format: 'json',
        },
      }),
    };

    return this.httpClient.get<IWish[]>('assets/wishes.json', options).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err:HttpErrorResponse){
    if (err.status === 0){
      console.log(`There is an issue with the client or network: ${err.error}`)
    }else {
      console.log(`Server-side error: ${err.error}`)
    }

    return throwError(()=>new Error('Can not retrieve wishes from the server.'))
  }


  // addWish(wish:IWish):Observable<IWish>{
  //   let options = this.getStandardOptions();
  //
  // }

}
