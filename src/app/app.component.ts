import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  hideMenu:boolean = false;
  navObs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.navObs$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const data = this.route.firstChild?.snapshot.data;
      this.hideMenu = data?.hideMenu ?? false;
    });
  }

  ngOnDestroy(): void {
    this.navObs$.unsubscribe();
  }

}
