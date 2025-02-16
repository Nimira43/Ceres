import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  standalone: true,
    templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = ''
  onButtonClick() {
    this.password = 'Password'
  }
}
