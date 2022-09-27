import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pragmana';
  btnClick= function () {
    this.router.navigateByUrl('/user');
};
}
