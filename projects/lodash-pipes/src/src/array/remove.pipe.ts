import { Pipe, PipeTransform } from "@angular/core";
import { remove } from "lodash";

@Pipe({
  name: "remove"
})
export class RemovePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return remove(value, args);
  }
}
