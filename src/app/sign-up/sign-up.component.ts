import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  ngOnInit(): void {
    const container = document.getElementById("container") as HTMLElement;
    const registerbtn = document.getElementById("register") as HTMLElement;
    const loginbtn = document.getElementById("login") as HTMLElement;

    registerbtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginbtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
}
