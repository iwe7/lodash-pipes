import { Pipe, PipeTransform } from "@angular/core";
import { join } from "lodash";

@Pipe({
  name: "join"
})
export class JoinPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return join(value, args);
  }
}
