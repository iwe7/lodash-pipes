import { Pipe, PipeTransform } from "@angular/core";
import { subtract } from "lodash";
@Pipe({
  name: "subtract"
})
export class SubtractPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return subtract(value, args);
  }
}
