import { Pipe, PipeTransform } from "@angular/core";
import { forEachRight } from "lodash";
@Pipe({
  name: "forEachRight"
})
export class ForEachRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forEachRight(value, args);
  }
}
