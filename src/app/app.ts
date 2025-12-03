import { Component } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: `
  <section>
    <app-user name="Sarvar Marimboyev"></app-user>
  </section>`
})
export class App {}
