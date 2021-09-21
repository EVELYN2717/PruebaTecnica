import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  nombres: string;
  apellidos: string;
  email: string;
  usuario: string;
  estado: any;
}

interface Estado {
  activo: string;
  inactivo: string;
}

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss']
})

export class ModalNewComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();

  }
  foods: Estado[] = [
    {activo: 'Activo', inactivo: 'Inactivo'},
    {activo: 'Activo', inactivo: 'Inactivo'},
    {activo: 'Activo', inactivo: 'Inactivo'}
  ];
}
