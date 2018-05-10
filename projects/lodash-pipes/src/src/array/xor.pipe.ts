import { Pipe, PipeTransform } from "@angular/core";
import { xor } from "lodash";

@Pipe({
  name: "xor"
})
export class XorPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return xor(value);
  }
}
