import { Pipe, PipeTransform } from "@angular/core";
import deepEqual from "deep-equal";

@Pipe({
  name: "deepEqual"
})
export class DeepEqualPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return deepEqual(value, args);
  }
}
