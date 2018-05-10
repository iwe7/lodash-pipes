import { Pipe, PipeTransform } from "@angular/core";
import { take } from "lodash";

@Pipe({
  name: "take"
})
export class TakePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return take(value, args);
  }
}
