import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Interfaces
import { IJsonPlaceholderResp } from '@interfaces/json-placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {

  constructor( private http: HttpClient ) {}

  getPosts(): Observable<IJsonPlaceholderResp[]> {
    return this.http.get<IJsonPlaceholderResp[]>(`${environment.endpointBaseJsonPlaceholder}/posts`);
  }

}
