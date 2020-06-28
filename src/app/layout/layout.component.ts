import { Component, ChangeDetectorRef , OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

interface RouteInfo {
  path: string;
  title: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnDestroy {
  private listTitles: any[];
  menuItems: any[];
  location: Location;
  user:User;
  isOpened:boolean;
  private ROUTES:RouteInfo[] = [
{
  path:'',
  title:'Dashboard'
},
{
  path:'/substation',
  title:'Sub Station'
},
{
  path:'/streetlight',
  title:'Street Light'
}
  ]

  ngOnInit() {
     this.isOpened= true;
    this.user = this.authenticationService.currentUserValue;
    this.listTitles = this.ROUTES.filter(listTitle => listTitle);
    this.menuItems = this.ROUTES.filter(menuItem => menuItem);
  }


  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,location: Location,private authenticationService: AuthenticationService,
    private router: Router ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.location = location;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.isOpened = false;
  }


  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
  
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }










}
