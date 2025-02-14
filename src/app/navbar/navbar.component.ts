import { Component } from '@angular/core';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DarkModeComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}