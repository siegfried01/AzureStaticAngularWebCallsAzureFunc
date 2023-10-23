import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}! How are you today? Built at Mon Oct 23 11:29:05 2023</div>`,
})
export class AppComponent {
  value = 'World ('+ new Date() + ')';
}
