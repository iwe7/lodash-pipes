import { Pipe, PipeTransform } from "@angular/core";
import { endsWith } from "lodash";

@Pipe({
  name: "endsWith"
})
export class EndsWithPipe implements PipeTransform {
  transform(value: any, args?: any, len?: any): any {
    return endsWith(args, value, len);
  }
}
