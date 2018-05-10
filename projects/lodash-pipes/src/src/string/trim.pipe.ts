import { Pipe, PipeTransform } from "@angular/core";
import { trim } from "lodash";

@Pipe({
  name: "trim"
})
export class TrimPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return trim(value, args);
  }
}
