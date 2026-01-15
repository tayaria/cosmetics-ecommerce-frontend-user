import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Client } from '../Entity/Client.Entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[a-zA-ZÀ-ÿ\\s'-]+$") // Only alphabetic characters
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$') // Must end with @gmail.com
      ]),
      mdp: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9]+$') // Alphanumeric
      ]),
      tele: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      adresse: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
      
  }

  ngOnInit(): void {
    // Initialization code if needed
  }

  // Getters for form controls
  get nom() { return this.adminForm.get('nom'); }
  get prenom() { return this.adminForm.get('prenom'); }
  get email() { return this.adminForm.get('email'); }
  get mdp() { return this.adminForm.get('mdp'); }
  get tele() { return this.adminForm.get('tele'); }
  get adresse() { return this.adminForm.get('adresse'); }

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
        case 'prenom':
          return 'Seuls les caractères alphabétiques sont autorisés';
        case 'email':
          return 'L\'email doit se terminer par @gmail.com';
        case 'mdp':
          return 'Le mot de passe doit contenir uniquement des caractères alphanumériques';
        case 'tele':
          return 'Le numéro de telephone doit contenir  8 chifferes';
        case 'adresse':
          return 'L\'adresse doit contenir au moins 3 caractères';
        default:
          return 'Format invalide';
      }
    }
    return '';
  }

  addNewClient() {
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
    const client = new Client(undefined, data.nom, data.prenom, data.email, data.mdp, data.tele,data.adresse);

    this.services.addclient(client).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Client ajouté avec succès !',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de l\'ajout de le client'
        });
      }
    });
  }
}
