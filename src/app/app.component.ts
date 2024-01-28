import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}! Try out new token for AZURE_STATIC_WEB_APPS_API_TOKEN_POLITE_CLIFF_0F03D401E? Built at Sat Jan 27 18:13:26 2024</div>`,
})
export class AppComponent {
  value = 'World! ' + new Date();
}
