import { Pipe, PipeTransform } from "@angular/core";
import { some } from "lodash";

@Pipe({
  name: "some"
})
export class SomePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return some(value, args);
  }
}
