import { Pipe, PipeTransform } from "@angular/core";
import { iteratee } from "lodash";

@Pipe({
  name: "iteratee"
})
export class IterateePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return iteratee(value);
  }
}
