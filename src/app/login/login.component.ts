import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, DarkModeComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() { 
    return this.loginForm.controls; 
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isDarkTheme(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  onSubmit() {
    this.submitted = true;

    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    // Aquí iría la lógica para autenticar al usuario
    console.log('Credenciales enviadas:', this.loginForm.value);
    
    // Simulación de inicio de sesión
    setTimeout(() => {
      // Redireccionar a la página principal tras un inicio de sesión exitoso
      this.router.navigate(['/home']);
    }, 1000);
  }
}