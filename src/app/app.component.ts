import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ModalNewComponent } from './modal-new/modal-new.component';
import { ModdalEditComponent } from './moddal-edit/moddal-edit.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'pruebaTecnicaIto';
  displayedColumns: string[] = ['user', 'email', 'name', 'surnames', 'activo', 'activos'];
  dataSource = new MatTableDataSource<RegisteredUsers>(USER_DATA);
  nombres: string;
  apellidos: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalNewComponent, {
      width: '800px',
      data: {name: this.nombres, surname: this.apellidos}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(ModdalEditComponent, {
      width: '800px',
      data: {name: this.nombres, surname: this.apellidos}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nombres = result;
    });
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(ModalDetailsComponent, {
      width: '800px',
      data: {name: this.nombres, surname: this.apellidos}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nombres = result;
    });
  }
}

export interface RegisteredUsers {
  user: string;
  email: string;
  name: string;
  surnames: string;
  activo: string;
  activos: any;
}

const USER_DATA: RegisteredUsers[] = [
  {user: 'egutierrez', email: 'evelyn@gmail.com', name: 'Evelyn', surnames: 'Gutierrez', activo: 'false', activos:''},
  {user: 'dgomez', email: 'diana@gmail.com', name: 'Diana', surnames: 'Gomez', activo: 'true', activos:''},
  {user: 'acontreras', email: 'andres@gmail.com', name: 'Andres', surnames: 'Contretas', activo: 'true', activos:''},
  {user: 'cbohorquez', email: 'camilo@gmail.com', name: 'Camilo', surnames: 'Bohorquez', activo: 'true', activos:''},
  {user: 'sfranco', email: 'sandra@gmail.com', name: 'Sandra', surnames: 'Franco', activo: 'false', activos:''},
  {user: 'fcastro', email: 'fabian@gmail.com', name: 'Fabian', surnames: 'Castro', activo: 'true', activos:''},
  {user: 'ndiaz', email: 'natalia@gmail.com', name: 'Natalia', surnames: 'Diaz', activo: 'true', activos:''},
  {user: 'jbernal', email: 'jhon@gmail.com', name: 'Jhon', surnames: 'Bernal', activo: 'false', activos:''},
  {user: 'smuñoz', email: 'santiago@gmail.com', name: 'Santiago', surnames: 'Muñoz', activo: 'true', activos:''},
  {user: 'vlopez', email: 'viviana@gmail.com', name: 'Viviana', surnames: 'Lopez', activo: 'true', activos:''},
];

