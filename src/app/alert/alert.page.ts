import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  AlertClick() {
    this.presentAlert();
  }

  AlertMultipleButtonsClick() {
    this.presentAlertMultipleButtons();
  }

  AlertPromptClick() {
    this.presentAlertPrompt();
  }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mi Formulario!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ej. Pedro'
        },
        {
          name: 'lastname',
          type: 'text',
          id: 'name2-id',
          value: 'Hernández',
          placeholder: 'Ej. López'
        },
        // multiline input.
        {
          name: 'address',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Ej. San Salvador'
        },
        {
          name: 'profile',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Foto de perfil'
        },
        // input date with min & max
        {
          name: 'bod',
          type: 'date',
          min: '1950-01-01',
          max: '2018-01-12'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
