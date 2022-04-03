import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
// სერვისი რომელიც შექმნის Loading ინდიკატორს სანამ HTTP დააბრუნებს მონაცემებს
export class SpinnerService {
  requestCount: number = 0;

  constructor(private spinner: NgxSpinnerService) { }

  // სპინერის ჩვენება
  loading() {
    this.requestCount++;
    this.spinner.show();
  }

  // სპინერის დამალვა
  idle() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.spinner.hide();
    }
  }
}
