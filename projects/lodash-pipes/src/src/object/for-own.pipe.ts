import { Pipe, PipeTransform } from "@angular/core";
import { forOwn } from "lodash";

@Pipe({
  name: "forOwn"
})
export class ForOwnPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return forOwn(value, args);
  }
}
