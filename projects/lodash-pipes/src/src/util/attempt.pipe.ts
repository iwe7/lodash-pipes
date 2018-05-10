import { Pipe, PipeTransform } from "@angular/core";
import { attempt } from "lodash";
@Pipe({
  name: "attempt"
})
export class AttemptPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return attempt(value, ...args);
  }
}
