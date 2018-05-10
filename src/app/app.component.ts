import { Component, Input } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  obj: any = {
    a: {
      c: 2
    }
  };

  arrs2: any[] = [
    { name: "name1" },
    { name: "name2" },
    { name: "name3" },
    { name: "name4" }
  ];

  getElements = () => {
    return [1, 2, 3];
  };

  private _hasTitle: boolean;
  @Input()
  set hasTitle(val: any) {
    this._hasTitle = val;
  }

  ngOnInit() {
    this.render();
  }
  render() {}
}
