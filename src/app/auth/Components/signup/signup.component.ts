import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  constructor() { }

  onSubmit() {
    console.log(this.SignupForm);
    if (this.SignupForm.invalid) {
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
