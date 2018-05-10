import { Pipe, PipeTransform } from "@angular/core";
import { takeRightWhile } from "lodash";

@Pipe({
  name: "takeRightWhile"
})
export class TakeRightWhilePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return takeRightWhile(value, args);
  }
}
