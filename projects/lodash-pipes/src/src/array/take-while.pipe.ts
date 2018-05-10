import { Pipe, PipeTransform } from "@angular/core";
import { takeWhile } from "lodash";

@Pipe({
  name: "takeWhile"
})
export class TakeWhilePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return takeWhile(value, args);
  }
}
