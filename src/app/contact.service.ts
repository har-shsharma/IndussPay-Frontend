import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private http: HttpClient) {}
  createContact(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getContact(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateContact(id: number, contact: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
