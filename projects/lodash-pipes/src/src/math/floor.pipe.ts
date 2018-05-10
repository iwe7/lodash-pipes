import { Pipe, PipeTransform } from "@angular/core";
import { floor } from "lodash";
@Pipe({
  name: "floor"
})
export class FloorPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return floor(value, args);
  }
}
