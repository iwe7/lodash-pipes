import { Pipe, PipeTransform } from "@angular/core";
import { uniqWith } from "lodash";

@Pipe({
  name: "uniqWith"
})
export class UniqWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uniqWith(value, args);
  }
}
