import { Pipe, PipeTransform } from "@angular/core";
import { reject } from "lodash";

@Pipe({
  name: "reject"
})
export class RejectPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return reject(value, args);
  }
}
