import { Routes, RouterModule } from '@angular/router';
 
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
 
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'booking/:id', component: BookingComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);