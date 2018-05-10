import { Pipe, PipeTransform } from "@angular/core";
import uuidv1 from "uuid/v1";

@Pipe({
  name: "uuidV1"
})
export class UuidV1Pipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return uuidv1();
  }
}
