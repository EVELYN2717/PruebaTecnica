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
  selector: 'app-moddal-edit',
  templateUrl: './moddal-edit.component.html',
  styleUrls: ['./moddal-edit.component.scss']
})
export class ModdalEditComponent {
  selected = 'option2';

  constructor(
    public dialogRef: MatDialogRef<ModdalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();

  }

}
