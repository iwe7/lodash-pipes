import { Pipe, PipeTransform } from "@angular/core";
import { uniqueId } from "lodash";

@Pipe({
  name: "uniqueId"
})
export class UniqueIdPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uniqueId();
  }
}
