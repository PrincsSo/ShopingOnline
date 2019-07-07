import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Userss } from './user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient  ) { }

  addUser(admin) {
    return this.http.post('http://localhost:3000/users', admin);
  }
  addProduct(shop) {
    return this.http.post('http://localhost:3000/products', shop);
  }
  getUser(): Observable<Userss[]> {
    return this.http.get<Userss[]>( 'http://localost:3000/users');
  }
}
