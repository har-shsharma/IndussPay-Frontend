import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    first_name: '',
    last_name: '',
    emailId: '',
    age: null,
    gender: '',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: ''
  };
  contacts: any[] = []; 
  selectedContactId: number | null = null; 

  constructor(private contactService: ContactService) {
    console.log("Loaded succesfuly");
  }

    onSubmit() {
    if (this.selectedContactId) {
      this.contactService.updateContact(this.selectedContactId, this.contact).subscribe({
        next: (response) => console.log('Contact updated', response),
        error: (error) => console.error('Error updating contact', error)
      });
    } else {
      this.contactService.createContact(this.contact).subscribe({
        next: (response) => console.log('Contact created', response),
        error: (error) => console.error('Error creating contact', error)
      });
    }
  }

  getContacts() {
    this.contactService.getContacts().subscribe({
      next: (data) => this.contacts = data,
      error: (error) => console.error('Error fetching contacts', error)
    });
  }

  editContact(contact: any) {
    this.selectedContactId = contact.id;
    this.contact = { ...contact };
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe({
      next: () => {
        console.log('Contact deleted');
        this.getContacts(); 
      },
      error: (error) => console.error('Error deleting contact', error)
    });
  }

  ngOnInit() {
    this.getContacts();
  }
}
