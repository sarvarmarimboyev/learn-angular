import { Component } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: ` <section >
    <app-user [name]="name" [users]="users"></app-user>
  </section>`,
})
export class App {
  name :string="Sarvar Marimboyev";
  users=[
    {name:'Alice',age:25,id:1},
    {name:'Bob',age:30,id:2},
    {name:'Charlie',age:35,id:3}
  ]
}
