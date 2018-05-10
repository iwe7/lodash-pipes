import { Pipe, PipeTransform } from "@angular/core";
import { reduce } from "lodash";

@Pipe({
  name: "reduce"
})
export class ReducePipe implements PipeTransform {
  transform(value: any, args?: any, accumulator?: any): any {
    return reduce(value, args, accumulator);
  }
}
