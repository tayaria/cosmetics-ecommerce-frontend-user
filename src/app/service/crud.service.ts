import { Injectable } from '@angular/core';
import { Client } from '../Entity/Client.Entity';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Entity/Contact.Entity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Produit } from '../Entity/Produit.Entity';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl ='http://localhost:8081/api'
  loginUser='http://localhost:8081/api/client/login'
  helper=new JwtHelperService();
  constructor(private http:HttpClient) { }
  addclient(client:Client){
    return this.http.post<any>(this.apiUrl+"/client", client);
  }
  addcontact(contact:Contact){
    return this.http.post<any>(this.apiUrl+"/contact", contact);
  }

  loginClient(client:Client) {
    return this.http.post<any>(this.loginUser,client)
  }

  isLoggedIn(){

    let token = localStorage.getItem("myTokenClient");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }

  userDetails() {
    let token:any=localStorage.getItem('myTokenClient');
    let decodeToken= this.helper.decodeToken(token);
    return decodeToken.data;
  }

  getProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl +"/produit");
  }

  reserverproduitFromApi(rq:any){
  return this.http.post<any>( "http://localhost:8081/api/reservation" ,rq )}

  getAllReservationbyClientId(){
  return this.http.get<any>( "http://localhost:8081/api/reservation/get-all-by-id-Client/"+this.userDetails()?.id );
}
   
  
}
