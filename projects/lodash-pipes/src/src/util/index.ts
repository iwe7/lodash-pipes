import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AttemptPipe } from "./attempt.pipe";
import { BindAllPipe } from "./bind-all.pipe";
import { CondPipe } from "./cond.pipe";
import { ConformsPipe } from "./conforms.pipe";
import { ConstantPipe } from "./constant.pipe";
import { DefaultToPipe } from "./default-to.pipe";
import { FlowRightPipe } from "./flow-right.pipe";
import { FlowPipe } from "./flow.pipe";
import { IdentityPipe } from "./identity.pipe";
import { IterateePipe } from "./iteratee.pipe";
import { MatchesPropertyPipe } from "./matches-property.pipe";
import { MatchesPipe } from "./matches.pipe";
import { MethodOfPipe } from "./method-of.pipe";
import { MethodPipe } from "./method.pipe";
import { MixinPipe } from "./mixin.pipe";
import { NthArgPipe } from "./nth-arg.pipe";
import { OverEveryPipe } from "./over-every.pipe";
import { OverSomePipe } from "./over-some.pipe";
import { OverPipe } from "./over.pipe";
import { PropertyOfPipe } from "./property-of.pipe";
import { PropertyPipe } from "./property.pipe";
import { RangeRightPipe } from "./range-right.pipe";
import { RangePipe } from "./range.pipe";
import { StubArrayPipe } from "./stub-array.pipe";
import { StubFalsePipe } from "./stub-false.pipe";
import { StubObjectPipe } from "./stub-object.pipe";
import { StubStringPipe } from "./stub-string.pipe";
import { StubTruePipe } from "./stub-true.pipe";
import { TimesPipe } from "./times.pipe";
import { ToPathPipe } from "./to-path.pipe";
import { UniqueIdPipe } from "./unique-id.pipe";

export const UtilPipes = [
  AttemptPipe,
  BindAllPipe,
  CondPipe,
  ConformsPipe,
  ConstantPipe,
  DefaultToPipe,
  FlowRightPipe,
  FlowPipe,
  IdentityPipe,
  IterateePipe,
  MatchesPropertyPipe,
  MatchesPipe,
  MethodOfPipe,
  MethodPipe,
  MixinPipe,
  NthArgPipe,
  OverEveryPipe,
  OverSomePipe,
  OverPipe,
  PropertyOfPipe,
  PropertyPipe,
  RangeRightPipe,
  RangePipe,
  StubArrayPipe,
  StubFalsePipe,
  StubObjectPipe,
  StubStringPipe,
  StubTruePipe,
  TimesPipe,
  ToPathPipe,
  UniqueIdPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...UtilPipes],
  exports: [...UtilPipes]
})
export class PipesUtilModule {}

export { AttemptPipe } from "./attempt.pipe";
export { BindAllPipe } from "./bind-all.pipe";
export { CondPipe } from "./cond.pipe";
export { ConformsPipe } from "./conforms.pipe";
export { ConstantPipe } from "./constant.pipe";
export { DefaultToPipe } from "./default-to.pipe";
export { FlowRightPipe } from "./flow-right.pipe";
export { FlowPipe } from "./flow.pipe";
export { IdentityPipe } from "./identity.pipe";
export { IterateePipe } from "./iteratee.pipe";
export { MatchesPropertyPipe } from "./matches-property.pipe";
export { MatchesPipe } from "./matches.pipe";
export { MethodOfPipe } from "./method-of.pipe";
export { MethodPipe } from "./method.pipe";
export { MixinPipe } from "./mixin.pipe";
export { NthArgPipe } from "./nth-arg.pipe";
export { OverEveryPipe } from "./over-every.pipe";
export { OverSomePipe } from "./over-some.pipe";
export { OverPipe } from "./over.pipe";
export { PropertyOfPipe } from "./property-of.pipe";
export { PropertyPipe } from "./property.pipe";
export { RangeRightPipe } from "./range-right.pipe";
export { RangePipe } from "./range.pipe";
export { StubArrayPipe } from "./stub-array.pipe";
export { StubFalsePipe } from "./stub-false.pipe";
export { StubObjectPipe } from "./stub-object.pipe";
export { StubStringPipe } from "./stub-string.pipe";
export { StubTruePipe } from "./stub-true.pipe";
export { TimesPipe } from "./times.pipe";
export { ToPathPipe } from "./to-path.pipe";
export { UniqueIdPipe } from "./unique-id.pipe";
