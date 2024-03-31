import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instadeath-dialog',
  standalone: true,
  imports: [MatDialogActions],
  templateUrl: './instadeath-dialog.component.html',
  styleUrl: './instadeath-dialog.component.scss'
})
export class InstadeathDialogComponent {
  
  
 // private readonly gameService = inject(MAT_DIALOG_DATA) data:any;
  constructor( 
    private dialogRef: MatDialogRef<InstadeathDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:{message:string}) {
    
      this.message = data.message;
      
  }
     
  message : string ; 
  ngOnInit(): void {
  }


  close() {
   
    this.dialogRef.close();
}

submit(): void {
  //Servicio graba datos en bbdd
 
  this.dialogRef.close();
}
}
