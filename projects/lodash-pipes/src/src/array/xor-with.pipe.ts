import { Pipe, PipeTransform } from "@angular/core";
import { xorWith } from "lodash";

@Pipe({
  name: "xorWith"
})
export class XorWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return xorWith(value, args);
  }
}
