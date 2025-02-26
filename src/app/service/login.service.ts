// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private apiURL = "http://localhost:3000/users";


//   constructor(private httpClient: HttpClient, private router: Router) { }

//   add(user: any) {
//     return this.httpClient.post(this.apiURL, user)
//   }

//   updateData(user: any) {
//     return this.httpClient.put(this.apiURL + "/" + user.id, user)
//   }

//   getAll() {
//     return this.httpClient.get(this.apiURL);
//   }

//   getByID(id: any) {
//     return this.httpClient.get(this.apiURL + "/" + id);
//   }

//   deleteByID(id: any) {
//     return this.httpClient.delete(this.apiURL + "/" + id);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentMessage: any;
  changeMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
}
}