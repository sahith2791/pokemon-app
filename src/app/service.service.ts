import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private httpClient: HttpClient) { }
  private messageSource = new BehaviorSubject<String>('');

  public getMessage(): Observable<String> {
    return this.messageSource.asObservable();
  }

  public setMessage(message: String) {
    return this.messageSource.next(message);
  }

  // Listing pokemon Api
  getPokemonList(): Observable<any>{
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=1000').pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError.bind)
    )
  }

  // Deatil pokemon Api
  getPokemonDetail(url: any): Observable<any>{
    return this.httpClient.get(`${url}`).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError.bind)
    )
  }

  

  // Error Handling
  private handleError(error: HttpErrorResponse) {
    return throwError(() => {new Error(`${error}`)});
  }


}
