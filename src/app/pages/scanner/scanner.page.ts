import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  code:any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      console.log('Data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
