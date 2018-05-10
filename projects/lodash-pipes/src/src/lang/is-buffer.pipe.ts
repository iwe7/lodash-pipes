import { Pipe, PipeTransform } from "@angular/core";
import { isBuffer } from "lodash";

@Pipe({
  name: "isBuffer"
})
export class IsBufferPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return isBuffer(value);
  }
}
