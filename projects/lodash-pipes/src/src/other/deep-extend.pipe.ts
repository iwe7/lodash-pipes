import { Pipe, PipeTransform } from "@angular/core";
import deepExtend from "deep-extend";

@Pipe({
  name: "deepExtend"
})
export class DeepExtendPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return deepExtend(value, args);
  }
}
