import { Pipe, PipeTransform } from "@angular/core";
import { setWith } from "lodash";

@Pipe({
  name: "setWith"
})
export class SetWithPipe implements PipeTransform {
  transform(value: any, args?: any, val?: any, cus?: any): any {
    return setWith(value, args, val, cus);
  }
}
