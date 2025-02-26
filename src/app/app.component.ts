import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './service/login.service';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor(private authservice:AuthService,    private storageService: StorageService){

  }
  ngOnInit(): void {
    this.subscription = this.authservice.currentMessage.subscribe((message: string) =>
      this.sharedMessage = message
    );


    if(localStorage.getItem('isLogin')){
      this.authservice.changeMessage("true")
    }
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      this.header = true;
      const user = this.storageService.getUser();

      console.log(this.header + "USer------------",user)
      this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showAdminBoard = this.roles.some(item => item.roleName === 'ROLE_ADMIN')
      this.showAdminBoard = this.roles.some(item => item === 'ROLE_ADMIN')
      console.log('ROLE_ADMIN---',this.showAdminBoard)

      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      // this.showModeratorBoard = this.roles.some(item => item.roleName === 'ROLE_MODERATOR')
      this.showModeratorBoard = this.roles.some(item => item === 'ROLE_MODERATOR')
      console.log('ROLE_MODERATOR---',this.showModeratorBoard)
      
      // this.showNormalBoard = this.roles.includes('ROLE_USER');
      // this.showNormalBoard = this.roles.some(item => item.roleName === 'ROLE_USER');
      this.showNormalBoard = this.roles.some(item => item === 'ROLE_USER');

      this.username = user.userName;
    }
  }

  logout(): void {
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();

    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
    this.storageService.clean();
    window.location.reload();
    
  }
  title = 'authentication';

  sharedMessage: string ='false';
  subscription!:Subscription;

  private roles: any[] = [{roleName:'', roleDescription:''}];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showNormalBoard = false;


  header = false;
  username?: string;

  eventBusSub?: Subscription;

}
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
//   searchQuery: string = '';

//   onSearch() {
//     console.log('Searching for:', this.searchQuery);
//     // You can add logic to filter data, make API calls, etc.
//   }
// }
