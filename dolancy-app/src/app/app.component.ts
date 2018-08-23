import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),{optional:true}
        ),
        query(':leave',
          animate('1000ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),{optional:true}
        ),
        query(':enter',
          animate('1000ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),{optional:true}
        ),
      ])
    ])
  ]
})

export class AppComponent{
  title = 'app';
  logo: string;
  loading = true;
  
  constructor(private titleService: Title, private router: Router) { 
    this.logo = '/assets/images/logo.png';
    this.titleService.setTitle('Dolancy Zapatería');
    this.loading = true;
    
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
