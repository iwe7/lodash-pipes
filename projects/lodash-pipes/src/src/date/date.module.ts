

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NowPipe } from './now.pipe';
export const DatePipes = [
  NowPipe
];
@NgModule({
  imports: [CommonModule],
  declarations: [...DatePipes],
  exports: [...DatePipes]
})
export class PipesArrayModule {}
