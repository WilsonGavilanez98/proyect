import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { actionSheetController } from '@ionic/core';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {


  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'albumnes',
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trsh-outline',
        cssClass: 'rojo',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        },
        },{
          text:'Share',
          icon: 'share-outline',
          data: 10,
          handler: () =>{
            console.log('share clicked');
          }
        },{
          text: 'play (open modal)',
          icon: 'caret-foward-circle-outline',
          data: 'Data value',
          handler: () => {
            console.log('play clicked');
          }
        },{
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('favorite clicked');
          }
        },{
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () =>{
            console.log('cancel clicked');
          }
      }]
    });
    await actionSheet.present();

    const {role, data} = await actionSheet.onDidDismiss();
    console.log('onDisDismiss resolved with role and data',role,data);
  }

}
