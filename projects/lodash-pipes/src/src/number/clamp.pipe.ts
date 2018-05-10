import { Pipe, PipeTransform } from "@angular/core";
import { clamp } from "lodash";
@Pipe({
  name: "clamp"
})
export class ClampPipe implements PipeTransform {
  transform(value: any, min: any, max: any): any {
    return clamp(value, min, max);
  }
}
