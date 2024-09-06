import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TablaPageComponent } from './components/tabla-page/tabla-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    SidebarComponent,
    TablaPageComponent
  ],
  imports: [SidebarComponent, 
    BrowserModule,
    AppRoutingModule
  ],
  exports : [SidebarComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
