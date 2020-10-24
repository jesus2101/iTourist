import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuController, PopoverController, IonSlides} from '@ionic/angular';
import {EventosT} from '../modelos/eventos.interface';
import {EventosService} from '../modelos/eventos.service';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import {filter,startWith,takeUntil} from 'rxjs/operators';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit,OnDestroy {
  private subsServicio=new Subject();
  private subscription:Subscription;
  
  eventos: EventosT[];
  slideOptions = {
   // initialSlide: 1,
    speed: 400,
    loop:true,
    zoom:true
  };

  constructor(private androidPermissions: AndroidPermissions,private browser: InAppBrowser,public popoverCtrl:PopoverController,private menu:MenuController, private eventoService:EventosService) { 
      
    }
  
  
  ngOnInit() {
    
    this.subscription =this.eventoService.getTodos().pipe(startWith([]),filter(res=>res.length>0),takeUntil(this.subsServicio)).subscribe(res=>{
      console.log(res);
      this.eventos=res;
       
    });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
 async mostrarPop(evento1){
        const popover=await this.popoverCtrl.create({
         component:PopinfoComponent,
         event:evento1
        });
        return await popover.present();
  }
  
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  openDirec(url){
    this.browser.create(url,'_system');
  }

  ngOnDestroy() {
    this.subsServicio.unsubscribe();
     this.subscription.unsubscribe();
    

  }
  
}
