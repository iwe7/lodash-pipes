import { Pipe, PipeTransform } from "@angular/core";
import { gt } from "lodash";

@Pipe({
  name: "gt"
})
export class GtPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return gt(value, args);
  }
}
