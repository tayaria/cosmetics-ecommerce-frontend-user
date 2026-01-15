import { Component } from '@angular/core';
import { Produit } from '../Entity/Produit.Entity';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  listeProduit: Produit[] = [];
  messageCommande=""
  isLogedIn:boolean
          
        
          constructor(private service: CrudService, private router: Router) {}
        
          ngOnInit(): void {
             this.isLogedIn=this.service.isLoggedIn();
            
            this.chargerProduits();
          }
        
          chargerProduits() {
            this.service.getProduit().subscribe({
              next: (produits) => {
                this.listeProduit = produits;
              },
              error: (err) => {
                console.error('Erreur lors du chargement des produits:', err);
                Swal.fire({
                  icon: 'error',
                  title: 'Erreur',
                  text: 'Impossible de charger la liste des produits'
                });
              }
            });
          }
        
      confirmReservation(idProduit: number) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Voulez-vous réserver cette produit?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, réserver!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.reserver(idProduit);
    }
  });
}

reserver(idProduit: number) {
  this.messageCommande = `<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`;
  let datas = this.service.userDetails();
  if (!datas) {
    this.connexion();
    return;
  }
  let rq: any = {};
  rq.idProduit = idProduit;
  rq.idClient = datas.id;

  this.service.reserverproduitFromApi(rq).subscribe(
    (data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Félicitations !',
        text: 'Réservé avec succès',
      });
       const idc=data.id
      this.router.navigate([`/paiment/${idc}`]).then(()=>{
        window.location.reload()
      })
    },
    (error: any) => {
      if (error.status === 409) {
        if (error.error === 'Client has already reserved this planning.') {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Vous avez déjà réservé ce planning !',
          });
        } else if (error.error === 'This planning has already been reserved the maximum number of times.') {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Ce planning a atteint sa capacité maximale de réservations !',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Problème de serveur',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Problème de serveur',
        });
      }
    }
  );
}
    connexion()
    {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });

    }    

}
