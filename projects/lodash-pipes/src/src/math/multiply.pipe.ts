import { Pipe, PipeTransform } from "@angular/core";
import { multiply } from "lodash";
@Pipe({
  name: "multiply"
})
export class MultiplyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return multiply(value, args);
  }
}
