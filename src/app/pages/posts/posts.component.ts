import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { JsonPlaceholderApiService } from '@services/json-placeholder-api.service';
import { ErrorHandlerService } from '@services/err-handler.service';

// Helpers
import { withRequestState } from '@app/helpers/utils/with-state.operator';

// Interfaces
import { DataState, IJsonPlaceholderResp } from '@interfaces/index';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  vm$!: Observable<DataState<IJsonPlaceholderResp[]>>;

  constructor(
    private _jsonPlaceholderApi: JsonPlaceholderApiService,
    private _errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.vm$ = withRequestState({
      obs$: this._jsonPlaceholderApi.getPosts(),
      errH: this._errorHandler,
      changingLoading: true,
    });
  }

  getLoadingMsg(vm: DataState<IJsonPlaceholderResp[]>): string {
    return vm.status === 'loading' ? vm.loadingMsg : 'trying';
  }

  trackByPostId(i: number, post: IJsonPlaceholderResp) {
    return post.id;
  }
}
