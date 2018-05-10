import { Pipe, PipeTransform } from "@angular/core";
import { lte } from "lodash";

@Pipe({
  name: "lte"
})
export class LtePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return lte(value, args);
  }
}
