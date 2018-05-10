import { Pipe, PipeTransform } from "@angular/core";
import { dropWhile } from "lodash";

@Pipe({
  name: "dropWhile"
})
export class DropWhilePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return dropWhile(value, args);
  }
}
