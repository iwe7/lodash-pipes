import { Pipe, PipeTransform } from "@angular/core";
import { sumBy } from "lodash";

@Pipe({
  name: "sumBy"
})
export class SumByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sumBy(value, args);
  }
}
