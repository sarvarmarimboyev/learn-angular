import { Component, signal,Input, computed } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
private _name=signal('Sarvar Marimboyev');
@Input() set nameInput(value:string){this._name.set(value); }
name =computed(()=>this._name());
}
