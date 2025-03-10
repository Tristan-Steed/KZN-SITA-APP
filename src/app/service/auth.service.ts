import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];
  
  constructor() {}

  login(username: string, password: string): Observable<any> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
      return new Observable(observer => {
        observer.next(user);
        observer.complete();
      });
    } else {
      return throwError(() => new Error('Invalid username or password'));
    }
  }

  logout() {
    localStorage.removeItem('user'); 
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user'); 
  }

  getUserRole(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || null;
  }


  async getUsers() {
    try{
      const response = await fetch("https://reqres.in/api/users?page=2");
      if(!response.ok) throw new Error("Network error");

      const UserDetails = await response.json();

      console.log(UserDetails);

     return UserDetails;

    }catch(error) {
      console.error("Error fetching data: ", error);
      return [];
    }
    
  }
}
