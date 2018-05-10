import { Pipe, PipeTransform } from "@angular/core";
import { capitalize } from "lodash";
// 转换字符串string首字母为大写，剩下为小写。
@Pipe({
  name: "_capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return capitalize(value);
  }
}
