import { Component, OnInit, Sanitizer } from '@angular/core';
import { AlertClientService } from "@trixprod/api-verse-real-estate/api/alertClient.service";
import { RentalClientService } from "@trixprod/api-verse-real-estate/api/rentalClient.service";

import { AlertDto } from "@trixprod/api-verse-real-estate/model/alertDto";
import { RentalDto } from "@trixprod/api-verse-real-estate/model/rentalDto";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage implements OnInit {
  alertes: AlertDto[];
  rentals: RentalDto[];
  imageURL: string;
  //basedata;
  imageLoaded:boolean;
  constructor(private alertClientService: AlertClientService, private rentalClientService: RentalClientService, private sanitizer : DomSanitizer) { }
  essai(): void {
    this.alertClientService.getAlertsList().subscribe(
      alertes => this.alertes = alertes.alerts
    )
    this.rentalClientService.getRentalsList().subscribe(
      list =>{
        this.rentals = list.rentals;
       // const reader = new FileReader();
      // console.log(this.rentals);
        //var b = new Blob(this.rentals[0].photos[0], { type: 'image/png' });
      //  reader.readAsDataURL(b);
    //    var URLcreator =  window.URL||webkitURL;
  //      this.imageURL = "data:image/png;base64,"+this.rentals[0].photos[0];
//        reader.onloadend = this.onLoadend;
       // console.log(b);
      }
    )
  }

  onLoadend(e):void{

     this.imageLoaded = true;
  }

  ngOnInit() {
    this.imageLoaded = false;
    this.essai();
    //console.log("hehe "+this.alertes.length);
  }
}
