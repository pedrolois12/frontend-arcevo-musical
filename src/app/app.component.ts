import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppOlaComponent } from './ola/ola.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppOlaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'frontend-arcevo-musical2';
  nome = 'Utfpr!'
}
