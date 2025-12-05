import { Component, effect, signal } from '@angular/core';
import { UserComponent } from './user/user';
import { IUser } from './interfaces';
import { log } from 'console';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Article],
  template:`<section>
    <app-comments >
      @defer(on viewport){}
    </app-comments>

    @placeholder{
      <p>This is comment place</p>
    }
    @loading{
      <p>This is loading </p>
    }
  </section>`
})
export class App {
  email = signal('');
  emailError = signal('');

  constructor() {
    effect(() => {
      const keyword = this.email();
      if (keyword.length) {
        console.log(`Searching for: ${keyword}`);
      }
    });
  }

  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email.set(input.value);
  }
}
