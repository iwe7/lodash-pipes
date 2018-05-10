import { Pipe, PipeTransform } from "@angular/core";
import { flattenDepth } from "lodash";

@Pipe({
  name: "flattenDepth"
})
export class FlattenDepthPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return flattenDepth(value, args);
  }
}
