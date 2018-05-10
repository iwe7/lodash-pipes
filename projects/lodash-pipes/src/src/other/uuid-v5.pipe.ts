import { Pipe, PipeTransform } from "@angular/core";
import uuidv5 from "uuid/v5";

@Pipe({
  name: "uuidV5"
})
export class UuidV5Pipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uuidv5(value, args);
  }
}
