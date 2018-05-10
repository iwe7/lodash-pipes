import { Pipe, PipeTransform } from "@angular/core";
import { lowerFirst } from "lodash";

@Pipe({
  name: "lowerFirst"
})
export class LowerFirstPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return lowerFirst(value);
  }
}
