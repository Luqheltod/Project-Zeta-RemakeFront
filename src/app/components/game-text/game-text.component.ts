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
  //Se lo mete el papa o lo recupero de aqui ya vere 
  texto: string = "Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c to dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la cajaTexto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la caja  Texto dentro de la c dentro de la caja  Texto dentro de la c  ";
  
  optionsBoxText = {
    strings: [this.texto],
    typeSpeed: 5, // Velocidad de escritura (milisegundos)
    showCursor: false, // Ocultar el cursor
    onComplete: (self: Typed) => {
      this.typedInstance = self;
    }

  }

  ngAfterViewInit() {
    this.initTextAnimation();
  }
 

  initTextAnimation() {
  
    this.typedInstance = new Typed('.caja-con-scroll', this.optionsBoxText);
    //Evento click en el dom para terminar el texto
    this.caja.nativeElement.addEventListener('click', () => {
      this.completeText();
    });
  }

  completeText() {
    if (this.typedInstance) {
      if (this.typedInstance) {
        this.typedInstance.stop(); // Detiene la animación actual
        this.typedInstance.destroy(); // Destruye la instancia actual
        this.caja.nativeElement.innerText = this.optionsBoxText.strings?.[0] || ""; // Muestra todo el texto

      }
      
    }
  }    
}
