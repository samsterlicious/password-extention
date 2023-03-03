import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<Password[]> {
    return of([{password: "sam", username: "greg"}])
  }
}

export type Password = {
  password: string;
  username: string;
}
