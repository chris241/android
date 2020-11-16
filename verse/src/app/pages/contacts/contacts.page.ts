import { Component, OnInit } from '@angular/core';
import { AlertDto } from '@trixprod/api-verse-real-estate/model/alertDto';
import { Router } from '@angular/router';
import { AlertClientService } from '@trixprod/api-verse-real-estate/api/alertClient.service';
import { ContactService } from '@trixprod/api-verse-real-estate/api/contact.service';
import { ContactDto, ContactsListOutputDto } from '@trixprod/api-verse-real-estate';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  alertes: AlertDto[];
  contactList: ContactsListOutputDto;
  contacts: ContactDto[];
  constructor(private route: Router, private alertClientService: AlertClientService, private contactService: ContactService) { }

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
