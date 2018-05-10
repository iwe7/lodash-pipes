import { Pipe, PipeTransform } from "@angular/core";
import { zipObjectDeep } from "lodash";

@Pipe({
  name: "zipObjectDeep"
})
export class ZipObjectDeepPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return zipObjectDeep(value, args);
  }
}
