import { Pipe, PipeTransform } from "@angular/core";
import { xorBy } from "lodash";

@Pipe({
  name: "xorBy"
})
export class XorByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return xorBy(value, args);
  }
}
