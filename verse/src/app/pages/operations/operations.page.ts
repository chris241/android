import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertClientService } from '@trixprod/api-verse-real-estate/api/alertClient.service';
import { AlertDto } from '@trixprod/api-verse-real-estate/model/alertDto';
import { OperationDto, OperationClientService, OperationsOutputDto } from '@trixprod/api-verse-real-estate';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
  alertes: AlertDto[];
  operationsOut: OperationsOutputDto;
  walletOperations: OperationDto[];
  operations: OperationDto[]
  constructor(private route: Router, private alertClientService: AlertClientService, private operationClientServie: OperationClientService) { }

  ngOnInit() {
    this.alertClientService.getAlertsList().subscribe(
      alertes => {
        this.alertes = alertes.alerts
      }
    )
    this.operationClientServie.getOperationsList().subscribe(
      list => {
        this.operationsOut = list;
        this.walletOperations = this.operationsOut.walletOperations;
        this.operations = this.operationsOut.Operations;
        console.log(this.operationsOut);
        console.log(this.walletOperations);
        console.log(this.operations);
      }
    )

  }
  retour() {
    this.route.navigate(['tabs/appartements'])
  }
  logout(): void {

  }
}
