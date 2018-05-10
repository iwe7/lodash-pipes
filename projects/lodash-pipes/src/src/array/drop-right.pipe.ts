import { Pipe, PipeTransform } from "@angular/core";
import { dropRight } from "lodash";

@Pipe({
  name: "dropRight"
})
export class DropRightPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return dropRight(value, args);
  }
}
