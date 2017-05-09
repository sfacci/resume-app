import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'celsius'
})
 export class KelvinToCelsius implements PipeTransform {

   transform(kelvinDegrees: number) {
     const celsiusDegrees = kelvinDegrees - 273.15;
     return celsiusDegrees;
   }

}
