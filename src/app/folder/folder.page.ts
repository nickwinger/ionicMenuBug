import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  inputControl: AbstractControl = new FormControl('', Validators.required);

  constructor(private activatedRoute: ActivatedRoute) {
    setTimeout(() => {
      this.inputControl.markAsTouched();
      this.inputControl.markAsDirty();
    }, 1000);

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

}
