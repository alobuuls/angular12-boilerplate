import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { JsonPlaceholderApiService } from '@services/json-placeholder-api.service';

// Helpers
import { withRequestState, RequestState } from '@helpers/with-loading.operator';

// Interfaces
import { IJsonPlaceholderResp } from '@interfaces/json-placeholder.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  vm$!: Observable<RequestState<IJsonPlaceholderResp[]>>;

  constructor(private _jsonPlaceholderApi: JsonPlaceholderApiService) {}

  ngOnInit(): void {
    this.vm$ = withRequestState(this._jsonPlaceholderApi.getPosts());
  }

}
