import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tf-verify-account',
  templateUrl: './tf-verify-account.component.html',
  styleUrls: ['./tf-verify-account.component.scss']
})
export class TfVerifyAccountComponent implements OnInit {

  @Input() email;
  @Input() phoneNumber;
  @Input() type;
  @Input() sendingOtp;
  @Output() sendOtp: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSendOtp() {
    this.sendingOtp = true;
    if(this.type === 'phone') {
      this.sendOtp.emit(this.phoneNumber);
    } else {
      this.sendOtp.emit(this.email);
    }

  }
}
