import { Pipe, PipeTransform } from "@angular/core";
import { slice } from "lodash";

@Pipe({
  name: "slice"
})
export class SlicePipe implements PipeTransform {
  transform(value: any, start?: any, end?: any): any {
    return slice(value, start, end);
  }
}
