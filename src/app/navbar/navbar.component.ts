import { Component } from '@angular/core';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DarkModeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
