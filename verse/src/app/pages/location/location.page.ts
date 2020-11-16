import { Component, OnInit } from '@angular/core';
import { AlertDto } from '@trixprod/api-verse-real-estate/model/alertDto';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertClientService } from '@trixprod/api-verse-real-estate/api/alertClient.service';
import { ContractClientService } from '@trixprod/api-verse-real-estate/api/contractClient.service';
import { ContactDto } from '@trixprod/api-verse-real-estate/model/contactDto';
import { ContractOutputDto } from '@trixprod/api-verse-real-estate/model/contractOutputDto';
import { ContractDto } from '@trixprod/api-verse-real-estate/model/contractDto';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  alertes: AlertDto[];
  contrat: ContractDto;
  contact: ContactDto;
  contratOut: ContractOutputDto;
  alerts: AlertDto[];
  nbr: number;
  id=null;
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private alertClientService: AlertClientService, private contractClientService: ContractClientService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.alertClientService.getAlertsList().subscribe(
      alertes => this.alertes = alertes.alerts
    )
    this.contractClientService.getContract(this.id).subscribe(
      list => {
        this.contratOut = list
        this.contrat = this.contratOut.contract;
        this.contact = this.contratOut.contract.tenant;
        this.alerts = this.contratOut.alerts;
        this.nbr = this.alerts.length;
        console.log(this.contratOut);
        console.log(this.contrat);
        console.log(this.nbr);
      }
    )
  }
  retour() {
    this.route.navigate(['tabs/appartements'])
  }
  logout(): void {

  }
}
