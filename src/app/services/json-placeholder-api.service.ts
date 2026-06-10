import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

// Interfaces
import { IJsonPlaceholderResp } from '@interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IJsonPlaceholderResp[]> {
    return this.http.get<IJsonPlaceholderResp[]>(`${environment.endpointBaseJsonPlaceholder}/posts`);
  }
}
