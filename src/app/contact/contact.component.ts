import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CrudService } from '../service/crud.service';
import { Contact } from '../Entity/Contact.Entity';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  adminForm: FormGroup;
    messageCommande: string = '';
  
    constructor(
      private services: CrudService,
      private router: Router,
      private fb: FormBuilder
    ) {
      this.adminForm = this.fb.group({
        nom: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$") // Only alphabetic characters
        ]),
        
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$') // Must end with @gmail.com
        ]),
        
        tele: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        sujet: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        mes: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ])
      });
        
    }
  
    ngOnInit(): void {
      // Initialization code if needed
    }
  
    // Getters for form controls
    get nom() { return this.adminForm.get('nom'); }
    get email() { return this.adminForm.get('email'); }
    get tele() { return this.adminForm.get('tele'); }
    get sujet() { return this.adminForm.get('sujet'); }
    get mes() { return this.adminForm.get('mes'); }
  
    // Helper method to show error messages
    getErrorMessage(control: any, fieldName: string) {
      if (control.hasError('required')) {
        return `Le champ ${fieldName} est obligatoire`;
      }
      if (control.hasError('minlength')) {
        return `Le champ ${fieldName} doit contenir au moins ${control.errors.minlength.requiredLength} caractères`;
      }
      if (control.hasError('pattern')) {
        switch(fieldName) {
          case 'nom':
            return 'Seuls les caractères alphabétiques sont autorisés';
          case 'email':
            return 'L\'email doit se terminer par @gmail.com';
          
          case 'tele':
            return 'Le numéro de telephone doit contenir  8 chifferes';
          case 'sujet':
            return 'Le sujet doit contenir au moins 3 caractères';
          case 'mes':
            return 'Le message doit contenir au moins 10 caractères';
          default:
            return 'Format invalide';
        }
      }
      return '';
    }
  
    addNewContact() {
      if (this.adminForm.invalid) {
        // Show specific error messages for each invalid field
        Object.keys(this.adminForm.controls).forEach(key => {
          const control = this.adminForm.get(key);
          if (control?.invalid) {
            const errorMessage = this.getErrorMessage(control, key);
            Swal.fire({
              icon: 'error',
              title: 'Champ invalide',
              text: errorMessage
            });
          }
        });
        return;
      }
  
      const data = this.adminForm.value;
      const contact = new Contact(undefined, data.nom, data.email, data.tele, data.sujet,data.mes);
  
      this.services.addcontact(contact).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Contact ajouté avec succès !',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['']).then(() => {
              window.location.reload();
            });
          });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de l\'ajout de le contact'
          });
        }
      });
    }
}
