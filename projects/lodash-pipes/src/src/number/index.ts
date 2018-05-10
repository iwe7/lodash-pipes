import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClampPipe } from "./clamp.pipe";
import { InRangePipe } from "./in-range.pipe";
import { RandomPipe } from "./random.pipe";

export const NumberPipes = [ClampPipe, InRangePipe, RandomPipe];
@NgModule({
  imports: [CommonModule],
  declarations: [...NumberPipes],
  exports: [...NumberPipes]
})
export class PipesNumberModule {}
