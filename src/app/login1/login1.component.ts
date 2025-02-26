// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login1.component.html',
//   styleUrls: ['./login1.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   recaptchaToken: string | null = null;

//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({
//       phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]]
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid && this.recaptchaToken) {
//       console.log("Logging in with:", this.loginForm.value);
//       alert('Login successful');
//     } else {
//       alert('Please complete the form and verify CAPTCHA');
//     }
//   }

//   handleRecaptcha(response: string) {
//     this.recaptchaToken = response;
//   }
// }
