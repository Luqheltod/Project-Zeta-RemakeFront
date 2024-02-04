import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-game-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-text.component.html',
  styleUrl: './game-text.component.scss'
})
export class GameTextComponent {

  @ViewChild('caja') caja!: ElementRef;
  typedInstance: Typed | undefined
  texto: string = "Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c dentro de la caja  Texto dentro de la c  ";
  options = {
    strings: [this.texto],
    typeSpeed: 5, // Velocidad de escritura (milisegundos)
    showCursor: false, // Ocultar el cursor
    onComplete: (self: Typed) => {
      this.typedInstance = self;
    }

  }
  ngOnInit() {
    this.iniciarAnimacion();
  }

  iniciarAnimacion() {
    // Inicializar Typed.js
    this.typedInstance = new Typed('.caja-con-scroll', this.options);
  }

  completarTexto() {
    if (this.typedInstance) {
      if (this.typedInstance) {
        this.typedInstance.stop(); // Detiene la animación actual
        this.typedInstance.destroy(); // Destruye la instancia actual
        this.caja.nativeElement.innerText = this.options.strings?.[0] || ""; // Muestra todo el texto

      }
      
    }
  }    
}
