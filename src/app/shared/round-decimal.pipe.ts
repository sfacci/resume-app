import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'rounddecimal'
})
 export class RoundDecimal implements PipeTransform {

   transform(num: number, decimalPlaces: number) {
     const roundedNumber = num.toFixed(decimalPlaces);
     return roundedNumber;
   }
 }
