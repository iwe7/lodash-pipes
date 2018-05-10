import { Pipe, PipeTransform } from "@angular/core";
import { divide } from "lodash";
@Pipe({
  name: "divide"
})
export class DividePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return divide(value, args);
  }
}
