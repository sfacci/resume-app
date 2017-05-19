import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modalState', [
      state('hidden', style({ display: 'none', opacity: 0 })), 
      state('visible', style({ display: 'block', opacity: 1 }) ),
      transition('hidden <=> visible', animate(1500))
    ])
  ]
})
export class ModalComponent implements OnInit {
  public displayState = 'hidden'; //or visible
  //public visible = false;
  //private visibleAnimate = false;

  constructor() { }

  ngOnInit() {
  }

  public onAnimate() {
    this.displayState = 'visible';
    setTimeout( () => {
      this.displayState = 'hidden'; },
       3000);
  }
  // public show(): void {
  //   //this.visible = true;
  //   //setTimeout(() => this.visibleAnimate = true, 1000);
  // }

  // public hide(): void {
  //   //this.visibleAnimate = true;
  //   //setTimeout(() => this.visible = false, 2000);
  // }

  public onContainerClicked(event: MouseEvent): void {
   // if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.displayState = 'hidden';
    //}
  }
  
}

