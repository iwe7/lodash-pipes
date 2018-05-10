import { Pipe, PipeTransform } from "@angular/core";
import { lastIndexOf } from "lodash";

@Pipe({
  name: "lastIndexOf"
})
export class LastIndexOfPipe implements PipeTransform {
  transform(value: any, args?: any, fromIndex?: any): any {
    return lastIndexOf(value, args, fromIndex);
  }
}
