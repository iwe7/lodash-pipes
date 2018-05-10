import { Pipe, PipeTransform } from "@angular/core";
import { zipWith } from "lodash";

@Pipe({
  name: "zipWith"
})
export class ZipWithPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return zipWith(value, args);
  }
}
