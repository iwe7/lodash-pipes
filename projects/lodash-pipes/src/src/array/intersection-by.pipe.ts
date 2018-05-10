import { Pipe, PipeTransform } from "@angular/core";
import { intersectionBy } from "lodash";

@Pipe({
  name: "intersectionBy"
})
export class IntersectionByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return intersectionBy(value, args);
  }
}
