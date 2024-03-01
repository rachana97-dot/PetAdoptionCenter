import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  inputs:['input']
})
export class HomeComponent {
  currentIndex = 0;
  routerLink: any;
  
// a:string='Beagle';
// b:string='Poodle';
// c:string='Boxer';
// d:string='Pug';
// v =prompt('Type your pet name')
}
