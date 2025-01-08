import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonTitle, 
    CommonModule, 
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonButton,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  private router = new Router;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.value.email === "test@example.com" && this.loginForm.value.password ==="admin"){
      this.router.navigate(['/usuarios']).then(nav =>{
        console.log("Cumple")
      })
    }else{
      alert("DATOS ERRONEOS, SIGUE INTENTANDO")
    }
  }
}
