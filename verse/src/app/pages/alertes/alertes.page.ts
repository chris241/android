import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { Location } from "@angular/common";

import { AlertClientService } from "@trixprod/api-verse-real-estate/api/alertClient.service";
import { ContractClientService } from "@trixprod/api-verse-real-estate/api/contractClient.service";

import { AlertDto } from "@trixprod/api-verse-real-estate/model/alertDto";
import { ContractDto } from "@trixprod/api-verse-real-estate/model/contractDto";
import { Router } from '@angular/router';


@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],
})
export class AlertesPage implements OnInit {

  alertes: AlertDto[];
  contracts: ContractDto[];

  constructor(private alertClientService: AlertClientService, private route: Router, private _location: Location, private contractClientService: ContractClientService) { }

  private getContracts(): void {
    this.contracts = new Array(this.alertes.length);
    for (let i = 0; i < this.alertes.length; i++) {
      this.contractClientService.getContract(this.alertes[i].idContract.toString()).subscribe(
        contract => {
          this.contracts[i] = contract.contract;
        }
      )
    }
  }

  ngOnInit() {
    this.alertClientService.getAlertsList().subscribe(
      liste => {
        this.alertes = liste.alerts;
        this.getContracts();
      }
    );
  }

  getIconColor(alert: AlertDto): string {
    if (alert.severity === 'high') return 'danger';
    if (alert.severity === 'medium') return 'warning';
    return 'dark';

  }
  goBack(): void {
    this._location.back();
  }
  retour() {
    this.route.navigate(['tabs/appartements']);
  }
  logout(): void {

  }
}
