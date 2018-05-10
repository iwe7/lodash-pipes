import { Pipe, PipeTransform } from "@angular/core";
import { mixin } from "lodash";

@Pipe({
  name: "mixin"
})
export class MixinPipe implements PipeTransform {
  transform(value: any, args?: any, opts?: any): any {
    return mixin(value, args, opts);
  }
}
