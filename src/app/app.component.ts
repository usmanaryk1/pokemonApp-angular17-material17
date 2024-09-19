import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PokeListComponent } from "./components/poke-list/poke-list.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // imports: [RouterOutlet, PokeListComponent, HeaderComponent, RouterLink, RouterLinkActive, MoveListComponent, MovesComponent]
    imports: [RouterOutlet, PokeListComponent, HeaderComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'pokemonApp-angular17-material17';
}
