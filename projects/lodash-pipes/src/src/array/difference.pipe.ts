import { Pipe, PipeTransform } from "@angular/core";
import { difference } from "lodash";

@Pipe({
  name: "difference"
})
export class DifferencePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return difference(value, args);
  }
}
