import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertClientService } from '@trixprod/api-verse-real-estate/api/alertClient.service';
import { AlertDto } from '@trixprod/api-verse-real-estate/model/alertDto';
import { RentalOutputDto } from '@trixprod/api-verse-real-estate/model/rentalOutputDto';
import { RentalClientService } from '@trixprod/api-verse-real-estate/api/rentalClient.service';
import { RentalDto } from '@trixprod/api-verse-real-estate/model/rentalDto';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperationDto, ReservationDto, ContractDto } from '@trixprod/api-verse-real-estate';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.page.html',
  styleUrls: ['./appartement.page.scss'],
})
export class AppartementPage implements OnInit {
  alertes: AlertDto[];
  rentalOut: RentalOutputDto;
  rental: RentalDto;
  operations: OperationDto[];
  reservations: ReservationDto[];
  contrats: ContractDto[];
  id = null;
  title;
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private alertClientService: AlertClientService, private rentalClientService: RentalClientService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.alertClientService.getAlertsList().subscribe(
      alertes => this.alertes = alertes.alerts
    )
    this.getRental();

  }
  retour() {
    this.route.navigate(['tabs/appartements'])
  }
  logout(): void {

  }
  getRental() {
    this.rentalClientService.getRental(this.id).subscribe(
      rentalOutPut => {
        this.rentalOut = rentalOutPut;
        this.operations = rentalOutPut.operations;
        this.rental = this.rentalOut.rental;
        this.reservations = rentalOutPut.reservations;
        this.contrats = rentalOutPut.contracts;
      }

    )
  }
}
