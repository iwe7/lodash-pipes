import { Pipe, PipeTransform } from "@angular/core";
import { lt } from "lodash";

@Pipe({
  name: "lt"
})
export class LtPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return lt(value, args);
  }
}
