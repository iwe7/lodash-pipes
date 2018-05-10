import { Pipe, PipeTransform } from "@angular/core";
import { split } from "lodash";

@Pipe({
  name: "split"
})
export class SplitPipe implements PipeTransform {
  transform(value: any, args?: any, limit?: number): any {
    return split(value, args, limit);
  }
}
