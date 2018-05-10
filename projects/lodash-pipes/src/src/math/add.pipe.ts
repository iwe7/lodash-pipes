import { Pipe, PipeTransform } from "@angular/core";
import { add } from "lodash";
@Pipe({
  name: "add"
})
export class AddPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return add(value, args);
  }
}
