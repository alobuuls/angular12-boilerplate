import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, filter } from 'rxjs/operators';

// Services
import { UnsplashApiService } from '@services/unsplash-api.service';

// Interfaces
import { IRespUnsplashApi } from '@interfaces/unsplash-api.interace';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy {

  // Subject que emite los cambios del input (búsqueda reactiva)
  private searchSubject = new Subject<string>();

  // Valor del input
  searcher = '';

  photos: IRespUnsplashApi[] = [];

  // Indica si el usuario ya realizó una búsqueda (para controlar mensajes UI)
  hasSearched: boolean = false;

  isLoading!: boolean;
  error: any = null;

  // Contenedor de suscripciones para evitar memory leaks
  private sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _unsplashApi: UnsplashApiService
  ) {}

  ngOnInit(): void {
    // Flujo principal de búsqueda:
    // - toma valor inicial desde queryParams
    // - aplica debounce
    // - evita llamadas repetidas
    // - filtra valores vacíos
    // - consume la API
    const searchSub = this.searchSubject.pipe(

      // Valor inicial (permite cargar desde URL o default 'dogs')
      startWith(this.route.snapshot.queryParams['search'] ?? 'dogs'),

      // Evita llamadas en cada tecla (espera 400ms)
      debounceTime(400),

      // Evita repetir búsquedas con el mismo valor
      distinctUntilChanged(),

      // Limpia estado antes de buscar y valida input
      filter(q => {
        this.searcher = q;
        this.photos = [];
        return q && q.trim().length > 0;
      }),
      // Cancela peticiones anteriores si el usuario sigue escribiendo
      switchMap(q => this._unsplashApi.getPhotos(q))
    ).subscribe(res => {

      this.photos = res.data;
      this.isLoading = res.loading;
      this.error = res.msgError ? res.msgError.message ?? 'Error al cargar fotos' : null;

      // Sincroniza input con queryParams o valor actual
      this.searcher = this.searcher ?? this.route.snapshot.queryParams['search'] ?? 'dogs';
    });

    // Guarda la suscripción
    this.sub.add(searchSub);
  }

  // Optimiza renderizado del ngFor (evita re-render innecesario)
  trackByPhoto(idx: number, item: IRespUnsplashApi) {
    return item.id; // usar id si existe (mejor que index)
  }

  onSearchChange(val: string) {
    // Marca que ya hubo interacción del usuario
    this.hasSearched = true;

    // Actualiza la URL con queryParams (estado navegable)
    this.router.navigate(['/photos'], { queryParams: { search: val } });

    // Emite nuevo valor al flujo reactivo
    this.searchSubject.next(val);
  }

  ngOnDestroy(): void {
    // Limpia todas las suscripciones para evitar memory leaks
    this.sub.unsubscribe();
  }
}
