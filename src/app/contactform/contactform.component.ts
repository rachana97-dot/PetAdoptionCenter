import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  contactform(){
    // this.contact;
    console.log('Form submitted:', this.contact);
  }
}


