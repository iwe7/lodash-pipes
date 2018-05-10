import { Pipe, PipeTransform } from "@angular/core";
import uuidv4 from "uuid/v4";

@Pipe({
  name: "uuidV4"
})
export class UuidV4Pipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uuidv4();
  }
}
