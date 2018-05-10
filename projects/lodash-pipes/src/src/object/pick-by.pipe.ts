import { Pipe, PipeTransform } from "@angular/core";
import { pickBy } from "lodash";

@Pipe({
  name: "pickBy"
})
export class PickByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return pickBy(value, args);
  }
}
