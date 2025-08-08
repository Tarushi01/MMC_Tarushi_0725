import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

transform(values:string) :string{
    return 'Hello'+ values;
  }

}
