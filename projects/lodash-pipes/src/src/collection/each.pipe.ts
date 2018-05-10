import { Pipe, PipeTransform } from "@angular/core";
import { each } from "lodash";

@Pipe({
  name: "each"
})
export class EachPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return each(value, args);
  }
}
