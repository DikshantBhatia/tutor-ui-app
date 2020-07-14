import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tf-modal',
  templateUrl: './tf-modal.component.html',
  styleUrls: ['./tf-modal.component.scss']
})
export class TfModalComponent implements OnInit {

  @Input() title:string;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave() {
    this.save.emit(null);
  }
}
