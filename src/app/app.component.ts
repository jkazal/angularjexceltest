import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jexcel from "jexcel";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  title = "CodeSandbox";
 
  ngAfterViewInit() {
    jexcel(this.spreadsheet.nativeElement, {
      data: [[]],
      minDimensions: [10, 10],
      onchange : this.change
    });
  }

  change (instance, cell, x, y, value) { var cellName = jexcel.getColumnNameFromId([x,y]); console.log('New change on cell ' + cellName + ' to: ' + value); }
}
