import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightText } from './highlight-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HighlightText],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ang-github-actions');
}
