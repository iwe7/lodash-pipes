import { Pipe, PipeTransform } from "@angular/core";
import { sampleSize } from "lodash";

@Pipe({
  name: "sampleSize"
})
export class SampleSizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sampleSize(value, args);
  }
}
