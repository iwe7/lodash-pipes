import { Pipe, PipeTransform } from "@angular/core";
import { zipObject } from "lodash";

@Pipe({
  name: "zipObject"
})
export class ZipObjectPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return zipObject(value, args);
  }
}
