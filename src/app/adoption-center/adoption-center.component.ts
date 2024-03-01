import { Component } from '@angular/core';
import { url } from 'node:inspector';

@Component({
  selector: 'app-adoption-center',
  standalone: true,
  imports: [],
  templateUrl: './adoption-center.component.html',
  styleUrl: './adoption-center.component.css'
})
export class AdoptionCenterComponent {
  Selects : any =['Small','Medium','Large'];
}
