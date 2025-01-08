import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonText, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { UsuarioServService } from '../service/usuario-serv.service';
import { TUsuarios } from '../interface/tusuarios';
import { UsuariosDetallePage } from '../usuarios-detalle/usuarios-detalle.page';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonText]
})
export class UsuariosPage implements OnInit {
  usuarios: TUsuarios[] = [];
  idUsuario: string = "";
  constructor(private usuariosSev: UsuarioServService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.usuariosAll();
  }

  usuariosAll() {
    this.usuariosSev.getUsuarios().subscribe(res => {
      this.usuarios = res;
      console.log(res)
    })
  }

  async openModal(id: number) {
    this.idUsuario = id.toString();
    const modal = await this.modalCtrl.create({
      component: UsuariosDetallePage,
      componentProps: { id: this.idUsuario }
    });
    modal.present();
  }
}
