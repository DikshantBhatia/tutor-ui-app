import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fixed-bottom-stepper',
  templateUrl: './fixed-bottom-stepper.component.html',
  styleUrls: ['./fixed-bottom-stepper.component.scss']
})
export class FixedBottomStepperComponent implements OnInit {

  @Input() currentStep:number;
  @Input() totalSteps:number;
  @Input() hasPreviousBtn:boolean;
  @Input() hasNextBtn:boolean;
  @Input() hasFinishBtn:boolean;

  @Output() previous: EventEmitter<null> = new EventEmitter();
  @Output() next: EventEmitter<null> = new EventEmitter();
  @Output() finish: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getWIdth() {
    const progressPercentage = (this.currentStep/this.totalSteps) * 100;
    return 'w-'+progressPercentage;
  }

  onNext(){
    this.next.emit();
  }

  onPrevious(){
    this.previous.emit();
  }

  onFinish(){
    this.finish.emit();
  }

}
