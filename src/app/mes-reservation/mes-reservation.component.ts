import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-mes-reservation',
  templateUrl: './mes-reservation.component.html',
  styleUrls: ['./mes-reservation.component.css']
})
export class MesReservationComponent {
listReservation:any=[]
  constructor(private service:CrudService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllReservationbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservation=data;
    })
  }
}
