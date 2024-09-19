import { Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'pokedex', component: PokeListComponent},
];
