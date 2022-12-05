import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/shared/Dtos/Users/LoginDto';
import { UserDto } from 'src/app/shared/Dtos/Users/UserDto';
import { Url } from 'src/app/shared/Url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  USER: UserDto | null = null;

  constructor(private http: HttpClient) { }

  Login(LoginDto: LoginDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${Url}/api/account/login`, LoginDto, {
      withCredentials: true,
    });
  }


  Signup(user: FormData): Observable<object> {
    return this.http.post(`${Url}/api/account/signup`, user);
  }
}
