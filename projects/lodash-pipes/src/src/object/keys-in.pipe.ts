import { Pipe, PipeTransform } from "@angular/core";
import { keysIn } from "lodash";

@Pipe({
  name: "keysIn"
})
export class KeysInPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return keysIn(value);
  }
}
