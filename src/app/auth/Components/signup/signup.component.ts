import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CheckEmailService } from '../../services/check-email.service';

interface signupForm {
  FirstName: FormControl<string>;
  LastName: FormControl<string>;
  Email: FormControl<string>;
  Password: FormControl<string>;
  ConfirmPassword: FormControl<string>;
  Image: FormControl<File>;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  showPassword: boolean = false;
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  showConfirmPassword: boolean = false;
  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  /**
   *
   */
  constructor(private auth: AuthService, private checkEmail: CheckEmailService) { }

  Signup(): void {



    const formdata: FormData = new FormData();

    formdata.append("FirstName", this.SignupForm.get('FirstName')!.value);
    formdata.append("LastName", this.SignupForm.get('LastName')!.value);
    formdata.append("Email", this.SignupForm.get('Email')!.value);
    formdata.append("Password", this.SignupForm.get('Password')!.value);
    formdata.append("ConfirmPassword", this.SignupForm.get('ConfirmPassword')!.value);
    formdata.append("Image", (document.getElementById("signupUserImage") as HTMLInputElement).files![0]);




    this.auth.Signup(formdata).subscribe({
      next: (v) => {
        console.log("data", v);
      },
      error: (e) => {
        console.log("error", e);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

  onSubmit(): void {
    console.log(this.SignupForm);
    if (this.SignupForm.valid) {
      this.Signup();
    }
  }

  CheckPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let Password = this.SignupForm?.controls.Password.value;
    let confirm = group.value;
    return Password === confirm ? null : { notSame: true }
  }

  ChangeImage(input: Event) {
    if (
      (input.target as HTMLInputElement).files &&
      (input.target as HTMLInputElement).files!.length
    ) {
      const file = (input.target as HTMLInputElement).files![0];

      var reader = new FileReader();

      reader.onload = function (e) {
        document
          .getElementById('userImage')!
          .setAttribute('src', e.target!.result!.toString());
      };

      reader.readAsDataURL(file);
    }
  }

  SignupForm = new FormGroup<signupForm>({
    FirstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    LastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    Email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.checkEmail.validate.bind(this.checkEmail)],
      updateOn: 'blur'
    }),
    Password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    ConfirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, this.CheckPassword],
      updateOn: 'submit'
    }),
    Image: new FormControl(),
  });
}
