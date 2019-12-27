import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title: string;
  visible: boolean;

  constructor() {
    this.visible = true;
  }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
