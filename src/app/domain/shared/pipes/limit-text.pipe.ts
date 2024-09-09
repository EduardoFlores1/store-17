import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText',
  standalone: true
})
export class LimitTextPipe implements PipeTransform {

  transform(titulo: string, maxLength: number = 46): string {
    let newText = '';
    if(titulo.length > maxLength) {
      newText = `${titulo.substring(0, maxLength)}...`;
    }else {
      newText = titulo;
    }
    return newText;
  }

}
