import { Pipe, PipeTransform } from "@angular/core";
import { forIn } from "lodash";

@Pipe({
  name: "forIn"
})
export class ForInPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forIn(value, args);
  }
}
