import { Pipe, PipeTransform } from "@angular/core";
import { indexOf } from "lodash";

@Pipe({
  name: "indexOf"
})
export class IndexOfPipe implements PipeTransform {
  transform(value: any, args?: any, fromIndex?: any): any {
    return indexOf(value, args, fromIndex);
  }
}
