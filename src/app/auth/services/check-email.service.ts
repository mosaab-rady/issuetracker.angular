import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Url } from 'src/app/shared/Url';

@Injectable({
  providedIn: 'root'
})
export class CheckEmailService implements AsyncValidator {

  constructor(private http: HttpClient) { }


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<boolean>(`${Url}/api/account/isEmailUsed?email=${control.value}`).pipe(
      map(isUsed => (isUsed ? { usedEmail: true } : null))
    );
  }

}
