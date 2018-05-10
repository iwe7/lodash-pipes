import { Pipe, PipeTransform } from "@angular/core";
import { trimStart } from "lodash";

@Pipe({
  name: "trimStart"
})
export class TrimStartPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return trimStart(value, args);
  }
}
