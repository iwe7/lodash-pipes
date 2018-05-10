import { Pipe, PipeTransform } from "@angular/core";
import { extendWith } from "lodash";
@Pipe({
  name: "extendWith"
})
export class ExtendWithPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return extendWith(value, ...args);
  }
}
