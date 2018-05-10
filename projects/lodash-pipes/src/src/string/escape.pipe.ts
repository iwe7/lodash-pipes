import { Pipe, PipeTransform } from "@angular/core";
import { escape } from "lodash";

@Pipe({
  name: "escape"
})
export class EscapePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return escape(value);
  }
}
