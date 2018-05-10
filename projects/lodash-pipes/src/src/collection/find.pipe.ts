import { Pipe, PipeTransform } from "@angular/core";
import { find } from "lodash";

@Pipe({
  name: "find"
})
export class FindPipe implements PipeTransform {
  transform(value: any, args?: any, index?: any): any {
    return find(value, args, index);
  }
}
