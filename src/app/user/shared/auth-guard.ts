import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    // canActivate(): boolean {
    //     if (localStorage.getItem('currentUser')) {
    //         // user is authenticated
    //         return true;
    //     } else {
    //         // user is not authenticated, redirect to login page
    //         this.router.navigate(['/unauthorized']);
    //         return false;
    //     }
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger
        if (route.data)
            return true;
        else {
            this.router.navigate(['/unauthorized'], { queryParams: { returnUrl: state.url } });

            return false;
        }
    }
}

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { SwimComponent } from '@carbon/icons-angular'; import { Observable } from 'rxjs';
// import { Permission } from 'src/app/services/utility/permission-constant';
// import { UtilityService } from 'src/app/services/utility/utility.service';

// @Injectable({ providedIn: 'root' }) export class AuthGuard implements CanActivate {

//     constructor(private utility: UtilityService, private router: Router) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         if (this.utility.hasPermission(route.data.permission))
//             return true;
//         else {
//             this.router.navigate(['/unauthorized'], { queryParams: { returnUrl: state.url } });

//             return false;
//         }
//     }
// }
