import { Pipe, PipeTransform } from "@angular/core";
import { round } from "lodash";
@Pipe({
  name: "round"
})
export class RoundPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return round(value, args);
  }
}
