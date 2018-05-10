import { Pipe, PipeTransform } from "@angular/core";
import { invokeMap } from "lodash";

@Pipe({
  name: "invokeMap"
})
export class InvokeMapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return invokeMap(value, args);
  }
}
