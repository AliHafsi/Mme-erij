import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import {MapComponent} from './heatmap/map/map.component';
import {EmployeeCreateComponent}     from'../app/employee-create/employee-create/employee-create.component';
import {EmployeeEditComponent} from'../app/employee-edit/employee-edit/employee-edit.component';
import {AlertComponent} from './alert/alert.component';
import {MotComponent} from './mot/mot.component';
import {LogoutComponent} from'./logout/logout.component';
import {GatewaysComponent} from '../app/gateways/gateways.component';
import {EmployeeListComponent} from '../app/employee-list/employee-list/employee-list.component';
import {CalendarComponent} from '../app/calendar/calendar.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
    ,{path:'home',component:HomeComponent}
    ,{path:'map',component:MapComponent},
    {path:'Employee',component:EmployeeCreateComponent},
    {path:'Employee-edit',component:EmployeeEditComponent},
    {path:'alert',component:AlertComponent},
    {path:'mot',component:MotComponent},
    {path:'logout',component:LogoutComponent},
    {path:'Gateway',component:GatewaysComponent},
    {path:'view',component:EmployeeListComponent},
    {path:'calendar',component:CalendarComponent}
    
    
    

];