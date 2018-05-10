import { Pipe, PipeTransform } from "@angular/core";
import { transform } from "lodash";

@Pipe({
  name: "transform"
})
export class TransformPipe implements PipeTransform {
  transform(value: any, args?: any, accumulator?: any): any {
    return transform(value, args, accumulator);
  }
}
