import { Pipe, PipeTransform } from "@angular/core";
import { clone } from "lodash";
@Pipe({
  name: "clone"
})
export class ClonePipe implements PipeTransform {
  transform(value: any): any {
    return clone(value);
  }
}
