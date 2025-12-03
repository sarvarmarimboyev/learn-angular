import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  @Input() name :string='';
  @Input() users[]:IUser =[];
}
interface IUser{
name:string;
age:number;
id:number;
}
