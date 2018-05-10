import { Pipe, PipeTransform } from "@angular/core";
import { unzipWith } from "lodash";

@Pipe({
  name: "unzipWith"
})
export class UnzipWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return unzipWith(value, args);
  }
}
