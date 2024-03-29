import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.APIEndpoint;

  constructor(protected http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getAllUsers(): Observable<HttpResponse<any>> {
    return this.http
      .get(environment.APIEndpoint + 'users', { observe: 'response' })
      .pipe(catchError(this.handleError))
  }
}
