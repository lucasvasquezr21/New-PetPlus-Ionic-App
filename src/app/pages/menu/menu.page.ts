import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'PetPlus',
      icon: 'information-circle-outline',
      path: '/about'
    },
    {
      title: 'Escanea el QR!',
      icon: 'qr-code-outline',
      path: '/scanner'
    },
    {
      title: 'Fichas',
      icon: 'paw-outline',
      path: '/animales'
    },
    {
      title: 'Veterinarias',
      icon: 'business-outline',
      path: '/veterinarias'
    },
  ];
  title='Home';
  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ionViewWillEnter() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }


  setTitle(title){
    this.title=title;
  }

  toggleMenu(width) {
    if (width > 768){
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }

  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    console.log(' ~ file: menu.page.ts ~ line 53 ~ MenuPage ~ onResize ~ newWidth',newWidth);
    this.toggleMenu(newWidth);
  }
}
