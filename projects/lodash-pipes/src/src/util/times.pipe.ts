import { Pipe, PipeTransform } from "@angular/core";
import { times } from "lodash";

@Pipe({
  name: "times"
})
export class TimesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return times(value, args);
  }
}
