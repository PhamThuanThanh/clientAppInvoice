import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {

  constructor(
    private http: HttpClient
  ) { }

  login(loginData) {
    const url = 'http://localhost:8000/home/login';
    return this.http.post(url, loginData);
  }
}
