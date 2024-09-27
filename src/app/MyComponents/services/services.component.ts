import { Component } from '@angular/core';
import { TestimonalsComponent } from "../testimonals/testimonals.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TestimonalsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
