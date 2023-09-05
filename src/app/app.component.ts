import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public subscription = 'advanced';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.reset();
    }
  }
}
