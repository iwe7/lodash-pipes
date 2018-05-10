import { Pipe, PipeTransform } from "@angular/core";
import { pad } from "lodash";

@Pipe({
  name: "pad"
})
export class PadPipe implements PipeTransform {
  transform(value: any, length?: any, chars?: any): any {
    return pad(value, length, chars);
  }
}
