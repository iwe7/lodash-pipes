import { Pipe, PipeTransform } from "@angular/core";
import { fill } from "lodash";

@Pipe({
  name: "fill"
})
export class FillPipe implements PipeTransform {
  transform(value: any, args?: any, start?: any, end?: any): any {
    return fill(value, args, start, end);
  }
}
