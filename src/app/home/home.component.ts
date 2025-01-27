import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, DarkModeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
