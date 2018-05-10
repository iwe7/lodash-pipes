import { Pipe, PipeTransform } from "@angular/core";
import { repeat } from "lodash";

@Pipe({
  name: "repeat"
})
export class RepeatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return repeat(value, args);
  }
}
