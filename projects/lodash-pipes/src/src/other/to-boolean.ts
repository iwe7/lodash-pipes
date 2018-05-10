import yn from "yn";

export function toBoolean(value?: any) {
  return yn(value, { default: true });
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toBoolean"
})
export class ToBooleanPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return toBoolean(value);
  }
}
