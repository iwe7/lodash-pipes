import { Pipe, PipeTransform } from "@angular/core";
import { dropRightWhile } from "lodash";

@Pipe({
  name: "dropRightWhile"
})
export class DropRightWhilePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return dropRightWhile(value, args);
  }
}
