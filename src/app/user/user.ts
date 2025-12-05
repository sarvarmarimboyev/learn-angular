import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { IUser } from '../interfaces';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',

  styleUrls: ['./user.css'],
})
export class UserComponent {
  @Input() name: string = '';
  @Input() users: IUser[] = [];
  @Output() deleteuserEvent=new EventEmitter<IUser>();

  onDelete(user: IUser) {
    this.deleteuserEvent.emit(user);
  }
}


