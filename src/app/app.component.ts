import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersDataService]
})
export class AppComponent {
  title = 'y';

  showComponent: boolean ;
  showMainPage: boolean ;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.showComponent = false;
    this.showMainPage = false;
  }


  ngOnInit() {


    

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showComponent = this.router.url === '/';
    });
  
    
 

  
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showMainPage = this.router.url === '/main-page';
    
    });

  }
}
