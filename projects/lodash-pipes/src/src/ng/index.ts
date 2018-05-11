import { Pipe, PipeTransform } from "@angular/core";
import { TemplateRef, ViewContainerRef, ElementRef, Type } from "@angular/core";
@Pipe({
  name: "isTemplateRef"
})
export class IsTemplateRefPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value instanceof TemplateRef;
  }
}

@Pipe({
  name: "isViewContainerRef"
})
export class IsViewContainerRef implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value instanceof ViewContainerRef;
  }
}

@Pipe({
  name: "isElementRef"
})
export class IsElementRef implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value instanceof ElementRef;
  }
}

@Pipe({
  name: "isHTMLElement"
})
export class IsHTMLElement implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value instanceof HTMLElement;
  }
}


@Pipe({
  name: "isType"
})
export class IsType implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value instanceof Type;
  }
}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    IsElementRef,
    IsViewContainerRef,
    IsTemplateRefPipe,
    IsHTMLElement,
    IsType
  ],
  declarations: [
    IsElementRef,
    IsViewContainerRef,
    IsTemplateRefPipe,
    IsHTMLElement,
    IsType
  ]
})
export class PipeNgModule {}
