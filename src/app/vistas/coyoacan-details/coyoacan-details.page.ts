import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {MenuController, PopoverController, IonSlides} from '@ionic/angular';
import { TaskI } from '../../modelos/task.interface';
import { CoyoacanService } from '../../modelos/coyoacan.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Map, latLng, tileLayer, Layer, marker, Leaflet } from "leaflet";
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { Subscription } from 'rxjs';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
declare var L:any;

@Component({
  selector: 'app-coyoacan-details',
  templateUrl: './coyoacan-details.page.html',
  styleUrls: ['./coyoacan-details.page.scss'],
})
export class CoyoacanDetailsPage implements OnInit,OnDestroy {
  images11:string[]=[];
  //@ViewChild('mapId', {static: false}) mapContainer: ElementRef;
  private subscription:Subscription;
  map: leaflet;
  coords:any;

  varlat: any;
  varlon: any;
  milat: any;
  milon: any;
  todo: TaskI={
    nombre:'',
    descripcion:'',
    foto:'',
    icono:'',
    lat:'',
    lon:'',
    galeria1:'',
    galeria2:'',
    galeria3:'',
    galeria4:'',
    galeria5:'',
    galeria6:'',
    sitio:'',
  };
  slideOptions = {
    // initialSlide: 1,
     speed: 400,
     loop:true,
     zoom:true
   };
  todoId=null;
  constructor(private geolocation: Geolocation, private browser: InAppBrowser, private route: ActivatedRoute, private nav: NavController, private coyoService: CoyoacanService, private loadingController: LoadingController,private viewer:PhotoViewer) { }

  
  ngOnInit() {
    this.todoId=this.route.snapshot.params['id'];
    if(this.todoId){
      this.loadTodo();
    }
    
 
  }
  loadTodo(){
  
   this.coyoService.getTodo(this.todoId).subscribe(res=>{
     
     this.todo=res;
     this.varlat = this.todo.lat;
      this.varlon = this.todo.lon;
      this.images11=[this.todo.galeria1,this.todo.galeria2,this.todo.galeria3,this.todo.galeria4,this.todo.galeria5,this.todo.galeria6];
      
   });

  

  }
  ionViewDidEnter() {
   
    this.loadmap();
  }
 
  loadmap(){
    document.getElementById('mapId').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    var options={
      maximumAge: 60000,
      timeout: 30000,
      
   };
   
    this.geolocation.watchPosition(options).subscribe((geposition: Geoposition) => {
      this.milat= geposition.coords.latitude;
       this.milon=geposition.coords.longitude;
       
      
         var map = L.map('mapId');
        
       
      

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.Routing.control({
        waypoints: [
            L.latLng(this.milat, this.milon),
            L.latLng(this.varlat, this.varlon)
        ],
        router: L.Routing.mapbox('pk.eyJ1IjoieWl6IiwiYSI6ImNrMHNyZ3g0YzAxZWgzY2wxYnp1c3FxZ2MifQ.GaYureAJcr6AM5e3HH5bpg',{language: 'es'}),
      routeWhileDragging: true,
      show: false
    }).addTo(map);

    let posicion = new L.Icon({
      iconUrl: '../assets/icon/lugar.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50]
    });
    let pinlugar = new L.Icon({
      iconUrl: '../assets/icon/pin.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50]
    });
    marker([this.varlat, this.varlon], { icon: pinlugar })
  .addTo(map)
  .bindPopup("Destino")
  .openPopup();
  marker([this.milat, this.milon], { icon: posicion })
  .addTo(map)
  .bindPopup("Origen")
  .openPopup();
      });
    
    


   }
   
      ngOnDestroy(){
           
      }
      ionViewCanLeave(){
        var container = L.DomUtil.get('mapId');

        if(container != null){
        
        container._leaflet_id = null;
        
        }
      }
  
slidesDidLoad(slides: IonSlides) {
  slides.startAutoplay();
}

ZoomPhoto(url){
this.viewer.show(url,"",{share:true});
}

openDirec(url){
  this.browser.create(url,'_system');
}

}
