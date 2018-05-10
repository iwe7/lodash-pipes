import { Pipe, PipeTransform } from "@angular/core";
import uuidv3 from "uuid/v3";

@Pipe({
  name: "uuidV3"
})
export class UuidV3Pipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uuidv3(value, args);
  }
}
