import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoDePerfilComponent } from './components/foto-de-perfil/foto-de-perfil.component';
import { DescargaCurriculumComponent } from './components/descarga-curriculum/descarga-curriculum.component';
import { CurriculumPdfComponent } from './components/curriculum-pdf/curriculum-pdf.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    FotoDePerfilComponent,
    DescargaCurriculumComponent,
    CurriculumPdfComponent,
    NombreComponent,
    TituloComponent,
    AccordionComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
