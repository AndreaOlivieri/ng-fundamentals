import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {JQ_TOKEN} from '../../services/jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer', {static: false}) containerRef: ElementRef;

  constructor(
    @Inject(JQ_TOKEN) private $: any
  ) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLowerCase() === 'true') {
      this.$(this.containerRef.nativeElement).modal('hide');
    }
  }

}
