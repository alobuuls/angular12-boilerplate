import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

// Interfaces
import { IPhotoDetailServiceRes, IPhotoServiceRes, IRespUnsplashApi, IRespUnsplashSearchApi } from '@interfaces/unsplash-api.interace';

@Injectable({
  providedIn: 'root'
})
export class UnsplashApiService {

  private searchEndpoint: string = 'search/photos';
  private photosEndpoint:string = 'photos';

  constructor(private http: HttpClient) {}

  getPhotos(q: string, page = 1, perPage = 20): Observable<IPhotoServiceRes> {
    const params = new HttpParams()
      .set('query', q)
      .set('page', page)
      .set('per_page', perPage);

    const headers = new HttpHeaders({
      Authorization: `Client-ID ${environment.apiKeyUnsplash}`
    });

    // Construcción del endpoint final
    const endpoint: string = `${environment.apiUnsplash}/${this.searchEndpoint}`;

    return this.http.get<IRespUnsplashSearchApi>(endpoint, { headers, params }).pipe(

      // Transforma la respuesta de la API al formato que consume el componente
      map(data => ({
        data: data.results,     // lista de fotos
        loading: false,         // finaliza loading
        msgError: null          // sin error
      })),

      // Manejo de errores:
      // retorna estructura consistente para evitar romper la UI
      catchError(err =>
        of({
          data: [],
          loading: false,
          msgError: err
        })
      ),

      // Estado inicial antes de que llegue la respuesta HTTP
      // útil para mostrar loaders sin lógica extra en el componente
      startWith({
        data: [],
        loading: true,
        msgError: null
      })
    );
  }

  getPhotoDetailById(id:string): Observable<IPhotoDetailServiceRes> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${environment.apiKeyUnsplash}`
    });

    const endpoint:string = `${environment.apiUnsplash}/${this.photosEndpoint}/${id}`;

    return this.http.get<IRespUnsplashApi>(endpoint, { headers }).pipe(
      map(data => ({data, loading: false, msgError: null})),
      catchError(err => of({data: null, loading: false, msgError: err})),
      startWith({data: null, loading: true, msgError: null})
    );
  }

}
