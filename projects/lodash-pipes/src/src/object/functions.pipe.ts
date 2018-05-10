import { Pipe, PipeTransform } from '@angular/core';
import { functions } from "lodash";

@Pipe({
  name: 'functions'
})
export class FunctionsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return functions(value);
  }

}
