import { Pipe, PipeTransform } from "@angular/core";
import { concat } from "lodash";
@Pipe({
  name: "concat"
})
export class ConcatPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return concat(value, ...args);
  }
}
