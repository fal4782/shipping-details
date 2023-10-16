import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const time = value.slice(0,5)
    return time
  }

}
