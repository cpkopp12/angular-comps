import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

    constructor(private el: ElementRef) { }

    ngOnInit() {
      document.body.appendChild(this.el.nativeElement)
    }
}
