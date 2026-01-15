import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.css']
})
export class PaimentComponent {

  paymentHandler: any = null;
  invoiceGenerated: boolean = false;
  id: any;
  
  constructor(
    private route: ActivatedRoute,
    private service: CrudService,
    private router: Router,
   
  ) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.invokeStripe();
  }
  
  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51ORfw8CGCz5RXlZeoe3XDe37HmmqpZVdoHzeTdv6BwUbc2FN7TshEC3TQJeGrDQPE1oBRYJHeXUPDPqoUvwRZsAb00g0HXBiwp',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
         this.router.navigate(['/reservationpackclient']).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Paiement réussi !',
          text: 'Votre paiement a été validé.',
        }).then(() => {
          this.displayInvoice();
        });
        window.location.reload();
      });
      },


    });

    paymentHandler.open({
      name: 'Réservation de produits',
      description: 'Paiement de facture',
     
    });
  }

  // Charger le script Stripe
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51ORfw8CGCz5RXlZeoe3XDe37HmmqpZVdoHzeTdv6BwUbc2FN7TshEC3TQJeGrDQPE1oBRYJHeXUPDPqoUvwRZsAb00g0HXBiwp',
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken);
            Swal.fire({
              icon: 'success',
              title: 'Paiement effectué avec succès !',
              text: 'Votre transaction a bien été prise en compte.',
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  // Affichage de la facture après paiement
  displayInvoice() {
    Swal.fire({
      icon: 'info',
      title: 'Facture générée',
      text: '',
    });
    this.invoiceGenerated = true;
  }

  // Redirection vers la page facture
  connexion(): void {
    this.router.navigate([]).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Chargement en produits',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.reload();
      });
    });
  }

}


