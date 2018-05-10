import { Pipe, PipeTransform } from "@angular/core";
import { trimEnd } from "lodash";

@Pipe({
  name: "trimEnd"
})
export class TrimEndPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return trimEnd(value, args);
  }
}
