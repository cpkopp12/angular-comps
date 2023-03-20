import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'Because of the air.'},
    { title: 'Why is the ocean blue?', content: 'Because of the sky.'},
    { title: 'Why is the marble blue?', content: 'Because of the cat.'}
  ]


  onClick() {
    this.modalOpen = !this.modalOpen;
  }
        
}
