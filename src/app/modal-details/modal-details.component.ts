import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  nombres: string;
  apellidos: string;
  email: string;
  usuario: string;
  estado: any;
}

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent {
  selected = 'option2';

  constructor(
    public dialogRef: MatDialogRef<ModalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();

  }

}
