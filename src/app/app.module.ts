import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { OktaAuthModule } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';

const config = {
  issuer: 'https://dev-488598.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oafvhpbfOY8i19ch356'
};

@NgModule({
  declarations: [
    AppComponent,
    EmpresasListComponent,
    EmpresasEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
