import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar, ModalController, NavParams } from '@ionic/angular/standalone';
import { UsuarioServService } from '../service/usuario-serv.service';
import { TUsuarios } from '../interface/tusuarios';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.page.html',
  styleUrls: ['./usuarios-detalle.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonItem,
    IonLabel]
})
export class UsuariosDetallePage implements OnInit {
  usuarioDetalle: TUsuarios | null = null;
  id: string = "";
  constructor(private usuariosSev: UsuarioServService, private modalCtrl: ModalController, private params: NavParams) { }

  ngOnInit() {
    this.id = this.params.get('id');
    console.log(this.params.get('id'));
    this.detalle();
  }

  detalle() {
    this.usuariosSev.getDetalle(this.id).subscribe(res => {
      console.log(res)
      this.usuarioDetalle = res;
    })
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
