import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-rest',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './snack-bar-rest.component.html',
  styleUrl: './snack-bar-rest.component.scss'
})
export class SnackBarRestComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBar: MatSnackBar) { }
}
