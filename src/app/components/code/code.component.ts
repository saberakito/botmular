import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'] 
})
export class CodeComponent implements OnInit {

  constructor(private todoServcie:TodoService,private router:Router) { }
  truewallet_cash:any;
  true_id:any;
  image_name:any;
  image_type:any;
  ngOnInit() {
   
  }
  onSubmit(form: NgForm): void {
    if(form.value.code!=null&&form.value.code!=""){
      if(confirm("ยืนยันการเติมเครดิท?")){
        this.todoServcie.addCredit(form.value.code).subscribe((response)=>{
          if(response.success==true){
            alert('เติม credit เรียบร้อยแล้ว');
            this.router.navigate(['/home']);
          }else{
            alert('รหัสบัตรไม่ถูกต้อง');
          }
        });
      }
    }else{
      alert('กรุณากรอกหมายเลขบัตรเงินสด');
    }
  }
}
