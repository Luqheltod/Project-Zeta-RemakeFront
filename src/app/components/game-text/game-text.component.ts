import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';
import { StageRepository } from '../../store/stage.repository';
import { Stage } from '../../models/stage';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-game-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-text.component.html',
  styleUrl: './game-text.component.scss'
})
export class GameTextComponent {
  //Elemento del dom
  @ViewChild('caja') caja!: ElementRef;
  //Instancia de Typed
  typedInstance: Typed | undefined

  @Input() text!:string;
  textoHtml? : SafeHtml;
  
  //Opciones de typed
  optionsBoxText: TypedOptions = { };



  
constructor(private sanitizer: DomSanitizer) { }
ngOninit(){
  
}

  ngOnChanges(changes: SimpleChanges){
    //Cuando cambia el texto, reiniciamos typed
      if(changes['text']){
    var textoSanitizado = this.sanitizer.bypassSecurityTrustHtml(this.text);
    this.textoHtml = textoSanitizado;
    this.initTextAnimation();
      }
  }

  initTextAnimation() {
    
    if (this.typedInstance) {
      this.typedInstance.destroy(); // Destruye la instancia actual antes de iniciar una nueva
      this.caja.nativeElement.classList.add('oculto');
    }
  
    if(this.text.length >0){
      
      this.optionsBoxText = {
        strings: [this.text],
        typeSpeed: 20, // Velocidad de escritura (milisegundos)
        showCursor: false, // Ocultar el cursor
        onBegin: (self: Typed) => {
          setTimeout(() => {
            this.caja.nativeElement.classList.remove('oculto'); // Muestra el elemento
          }, 500);
          },

        onComplete: (self: Typed) => {
          this.typedInstance = self;
        }
      
      }
      this.typedInstance = new Typed('.caja-con-scroll', this.optionsBoxText);
      //Evento click en el dom para terminar el texto
      this.caja.nativeElement.addEventListener('click', () => {
        this.completeText();
      });
    }

  }

  completeText() {
    if (this.typedInstance) {
        this.typedInstance.stop(); // Detiene la animación actual
        this.typedInstance.destroy(); // Destruye la instancia actual
        this.caja.nativeElement.innerHTML = this.optionsBoxText.strings?.[0] || ""; // Muestra todo el texto
      
    }
  }    


}
