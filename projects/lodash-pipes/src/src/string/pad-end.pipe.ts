import { Pipe, PipeTransform } from "@angular/core";
import { padEnd } from "lodash";

@Pipe({
  name: "padEnd"
})
export class PadEndPipe implements PipeTransform {
  transform(value: any, args?: any, chars?: string): any {
    return padEnd(value, args, chars);
  }
}
