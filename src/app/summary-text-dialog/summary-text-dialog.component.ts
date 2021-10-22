import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-summary-text-dialog',
  templateUrl: './summary-text-dialog.component.html',
  styleUrls: ['./summary-text-dialog.component.scss']
})
export class SummaryTextDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SummaryTextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
