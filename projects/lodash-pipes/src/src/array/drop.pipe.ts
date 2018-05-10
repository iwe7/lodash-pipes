import { Pipe, PipeTransform } from "@angular/core";
import { drop } from "lodash";

@Pipe({
  name: "drop"
})
export class DropPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return drop(value, args);
  }
}
