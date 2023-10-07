import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}! How are you today?</div>`,
})
export class AppComponent {
  value = 'World';
}
