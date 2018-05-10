import { Pipe, PipeTransform } from "@angular/core";
import { eq } from "lodash";

@Pipe({
  name: "eq"
})
export class EqPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return eq(value, args);
  }
}
