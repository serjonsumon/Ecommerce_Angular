import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/login.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string=''

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.storageService.getUser().userName;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    // console.log("Role---- -- -- ", this.form)
    let flag = false;

    this.authService.login(username, password).subscribe({

      next: data => {
        // console.log("Role---- -- -- ",data)
        this.reloadPage();
        this.storageService.saveUser(data);
        console.log("Role---- -- -- ",this.storageService.getUser().role)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;

        const user = this.storageService.getUser();

        // console.log("user-----",user)

        this.username = this.storageService.getUser().userName;
        console.log("user name-----",this.username)

                  flag = true;


      


      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}