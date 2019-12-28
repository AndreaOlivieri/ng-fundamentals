import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from '../services/jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {

  el: HTMLElement;
  @Input('appModalTrigger') modalId: string;

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', event => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
