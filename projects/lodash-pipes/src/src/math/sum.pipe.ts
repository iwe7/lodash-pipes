import { Pipe, PipeTransform } from "@angular/core";
import { sum } from "lodash";

@Pipe({
  name: "sum"
})
export class SumPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sum(value);
  }
}
