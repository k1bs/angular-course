import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {
  transform(value: string, fallback: string): any {
    let image
    image = value ? value : fallback
    return image
  }

}
