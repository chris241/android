import { Component, OnInit } from '@angular/core';

import { AlertDto } from "@trixprod/api-verse-real-estate/model/alertDto";
import { RentalDto } from "@trixprod/api-verse-real-estate/model/rentalDto";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { AlertClientService } from "@trixprod/api-verse-real-estate/api/alertClient.service";
import { RentalClientService } from "@trixprod/api-verse-real-estate/api/rentalClient.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.page.html',
  styleUrls: ['./appartements.page.scss'],
})
export class AppartementsPage implements OnInit {
  alertes: AlertDto[];
  rentals: RentalDto[];
  constructor(private alertClientService: AlertClientService, private route: Router, private rentalClientService: RentalClientService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.alertClientService.getAlertsList().subscribe(
      alertes => this.alertes = alertes.alerts
    )
    this.rentalClientService.getRentalsList().subscribe(
      list => {
        this.rentals = list.rentals
      }
    )

  }
  retour() {
    this.route.navigate(['tabs/home'])
  }
  logout(): void {

  }
}
