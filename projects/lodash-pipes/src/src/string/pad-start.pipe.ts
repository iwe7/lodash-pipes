import { Pipe, PipeTransform } from "@angular/core";
import { padStart } from "lodash";

@Pipe({
  name: "padStart"
})
export class PadStartPipe implements PipeTransform {
  transform(value: any, length?: any, chars?: any): any {
    return padStart(value, length, chars);
  }
}
