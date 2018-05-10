import { Pipe, PipeTransform } from "@angular/core";
import { escapeRegExp } from "lodash";

@Pipe({
  name: "escapeRegExp"
})
export class EscapeRegExpPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return escapeRegExp(value);
  }
}
