import { Pipe, PipeTransform } from "@angular/core";
import { mean } from "lodash";
@Pipe({
  name: "mean"
})
export class MeanPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return mean(value);
  }
}
