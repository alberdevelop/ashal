import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { AshalService } from '../../../shared/ashal.service';
import { Unit } from 'src/app/shared/unit';


@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {

  constructor(
    private tostr: ToastrService,
    private ashalService: AshalService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
  }

  newForm = this.fb.group({

    Eng_Des : ['', Validators.required],
    Arb_Des : ['', Validators.required]

  });

  ngOnInit() {
    if(this.data)this.setValues();
  }

  // set form values if edit
  private setValues(){

    this.ashalService.viewUnit(this.data).subscribe(
      res => {
        this.newForm.patchValue({
          Eng_Des: res.Eng_Des,
          Arb_Des: res.Arb_Des
        });
      },
      err => console.error(err)
    )

  }


  // Using getters will make your code look pretty
  get Eng_Des() { return this.newForm.get('Eng_Des') }
  get Arb_Des() { return this.newForm.get('Arb_Des') }


  // add new unit
  public newUnit() {

    if(!this.newForm.valid) return null;
    const vals = this.newForm.value;
    
    const unit: Unit = {
      Eng_Des: this.Eng_Des.value,
      Arb_Des: this.Arb_Des.value
    }


    // if updat
    if(this.data){
      this.ashalService.updateUnit(this.data, unit)
      .subscribe(
        res => {
          console.log(res);
          this.dialogRef.close();
          this.tostr.success('unit update');
        },
        err => console.error(err)
      )
    }

    // if new
    else{
      this.ashalService.newUnit(unit)
      .subscribe(
        res => {
          console.log(res);
          this.dialogRef.close();
          this.tostr.success('New Unit Created');
        },
        err => console.error(err)
      )
    }


  }


  // close popup form
  onClose(){
    // this.newBreadwinnerForm.reset();
    this.dialogRef.close();
  }

}