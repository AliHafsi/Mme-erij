// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './heatmap/map/map.component';
import { EmployeeCreateComponent } from './employee-create/employee-create/employee-create.component';
import {EmployeeService} from '../app/employee.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list/employee-list.component';
import { AlertComponent } from './alert/alert.component';
import { MotComponent } from './mot/mot.component';
import { LogoutComponent } from './logout/logout.component';
import { GatewaysComponent } from './gateways/gateways.component'

import {GatewayService} from '../app/shared/gateway.service';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    HomeComponent,
    MapComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    AlertComponent,
    MotComponent,
    LogoutComponent,
    GatewaysComponent,
    CalendarComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,EmployeeService,GatewayService,DayService,WeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent,EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,GatewaysComponent,LogoutComponent]
})
export class AppModule { }
