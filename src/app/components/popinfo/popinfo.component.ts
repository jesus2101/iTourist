import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}
  doc(){
      window.open('');
      this.popoverController.dismiss();
  }
  close(){
    this.popoverController.dismiss();
}

}
