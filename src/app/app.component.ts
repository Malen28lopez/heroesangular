import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from '../app/components/buscador/buscador.component';
import { TablaPageComponent } from '../app/components/tabla-page/tabla-page.component';
// import { AñadirPageComponent } from '../app/components/añadir-page';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-heroes';
}
 