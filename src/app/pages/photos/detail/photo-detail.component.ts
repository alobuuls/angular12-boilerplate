import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { UnsplashApiService } from '@services/unsplash-api.service';

// Interfaces
import { IRespUnsplashApi } from '@interfaces/unsplash-api.interace';

@Component({
  selector: 'photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  imgDetail: IRespUnsplashApi | null = null;
  isLoading: boolean | null = null;
  error: Error | any = null;

  private imgDetailsSubs: Subscription = new Subscription();

  constructor(
    private router: ActivatedRoute,   // acceso a parámetros de la URL
    private location: Location,       // navegación hacia atrás
    private unsplashApi: UnsplashApiService // servicio de API
  ) { }

  ngOnInit(): void {
    // Escucha cambios en los parámetros de la ruta (ej: /photo/123)
    // útil si el usuario navega entre detalles sin destruir el componente
    this.router.paramMap.subscribe(params => {
      // Obtiene el id desde la URL
      const id = params.get('id')!;
      this.getPhotoDetailById(id);
    });
  }

  getPhotoDetailById(id: string) {
    this.imgDetailsSubs = this.unsplashApi.getPhotoDetailById(id).subscribe(res => {
      this.imgDetail = res['data'];
      this.isLoading = res['loading'];
      this.error = res['msgError'];
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.imgDetailsSubs.unsubscribe();
  }

}
