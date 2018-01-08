import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {
  transform(value: string, fallback: string, forceHttps: boolean = false): any {
    let image
    image = value ? value : fallback
    if (forceHttps) {
      if (image.indexOf('https') === -1) {
        image = image.replace('http', 'https')
      }
    }
    return image
  }
}


@Pipe({
  name: 'clean'
})
class CleanPipe {
  transform(text: string, noNoWords: string) {
    let array = noNoWords.split(',')
    array.forEach(elem => {
      if (text.indexOf(elem) === -1) {
        text = text.replace(elem, '$%#@!')
      }
    })
    return text
  }
}
