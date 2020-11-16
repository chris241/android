import { Component, OnInit } from '@angular/core';
import { AlertDto } from '@trixprod/api-verse-real-estate/model/alertDto';
import { AlertClientService } from '@trixprod/api-verse-real-estate/api/alertClient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  alertes: AlertDto[];
  constructor(private route: Router, private alertClientService: AlertClientService, ) { }

  ngOnInit() {
    this.alertClientService.getAlertsList().subscribe(
      alertes => this.alertes = alertes.alerts
    )
  }
  retour() {
    this.route.navigate(['tabs/appartements'])
  }
  logout(): void {

  }
}
