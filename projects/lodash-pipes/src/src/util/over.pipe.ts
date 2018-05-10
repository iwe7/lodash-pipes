import { Pipe, PipeTransform } from "@angular/core";
import { over } from "lodash";

@Pipe({
  name: "over"
})
export class OverPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return over(value);
  }
}
