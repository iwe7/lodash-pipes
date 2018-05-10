import { Pipe, PipeTransform } from "@angular/core";
import { startsWith } from "lodash";

@Pipe({
  name: "startsWith"
})
export class StartsWithPipe implements PipeTransform {
  transform(value: any, args?: any, len?: any): any {
    return startsWith(value, args, len);
  }
}
