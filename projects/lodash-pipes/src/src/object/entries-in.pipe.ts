import { Pipe, PipeTransform } from "@angular/core";
import { entriesIn } from "lodash";
@Pipe({
  name: "entriesIn"
})
export class EntriesInPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return entriesIn(value);
  }
}
