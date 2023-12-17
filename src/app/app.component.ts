import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}! Try out new token for AZURE_STATIC_WEB_APPS_API_TOKEN_POLITE_CLIFF_0F03D401E? Built at Sat Dec 16 17:36:43 2023</div>`,
})
export class AppComponent {
  value = 'World! ' + new Date();
}
