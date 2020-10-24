import { Pipe, PipeTransform } from '@angular/core';
import {TaskI} from '../../app/modelos/task.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(sitios:TaskI[] , texto:string): TaskI[] {
   if(texto.length===0){return sitios;}
   texto=texto.toLocaleLowerCase();
   return sitios.filter(sitio=>{
    return sitio.nombre.toLocaleLowerCase().includes(texto);
   });

  }

}
