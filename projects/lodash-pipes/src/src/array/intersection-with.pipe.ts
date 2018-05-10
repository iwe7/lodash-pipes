import { Pipe, PipeTransform } from "@angular/core";
import { intersectionWith } from "lodash";

@Pipe({
  name: "intersectionWith"
})
export class IntersectionWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return intersectionWith(value, args);
  }
}
