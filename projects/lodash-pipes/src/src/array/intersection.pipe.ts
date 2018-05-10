import { Pipe, PipeTransform } from "@angular/core";
import { intersection } from "lodash";

@Pipe({
  name: "intersection"
})
export class IntersectionPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return intersection(value);
  }
}
