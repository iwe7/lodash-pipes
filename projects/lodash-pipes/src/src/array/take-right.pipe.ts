import { Pipe, PipeTransform } from "@angular/core";
import { takeRight } from "lodash";

@Pipe({
  name: "takeRight"
})
export class TakeRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return takeRight(value, args);
  }
}
