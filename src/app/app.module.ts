import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ** pacote material design completo ** //
import { MaterialModule } from './material/material.module';

// ** menu ** //
import { MatMenuModule } from '@angular/material/menu';
import { GuiaRapidoComponent } from './guia-rapido/guia-rapido.component';

// ** novos importes ** //
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './banner/banner.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { LoginComponent } from './acesso/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuiaRapidoComponent,
    AcessoComponent,
    BannerComponent,
    CadastroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AutenticacaoService],
  bootstrap: [AppComponent, MatMenuModule],
})
export class AppModule {}
