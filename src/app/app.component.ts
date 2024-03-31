import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { slideInAnimation } from './shared/animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, HeaderComponent],
  animations: [
    slideInAnimation,
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjectZeta';
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

}
