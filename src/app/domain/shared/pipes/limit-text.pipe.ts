import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText',
  standalone: true
})
export class LimitTextPipe implements PipeTransform {

  transform(titulo: string): string {
    let newText = '';
    if(titulo.length > 46) {
      newText = `${titulo.substring(0, 46)}...`;
    }else {
      newText = titulo;
    }
    return newText;
  }

}
