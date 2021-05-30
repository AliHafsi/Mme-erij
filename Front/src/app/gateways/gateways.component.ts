import { Component, OnInit } from '@angular/core';
import {NgForm}  from '@angular/forms';
import {GatewayService}  from '../shared/gateway.service';
import {Gateway} from '../shared/Gateway';



declare var M:any;

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css']
})
export class GatewaysComponent implements OnInit {

  constructor(private gatewayService:GatewayService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshGatewayList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.gatewayService.selectedGateway = {
      id:"",
      Latitude:"",
      Longitude:""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.gatewayService.postGateway(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshGatewayList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.gatewayService.putGateway(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshGatewayList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshGatewayList() {
    this.gatewayService.getGatewayList().subscribe((res) => {
      this.gatewayService.gateways = res as Gateway[]
    });
  }

  onEdit(gateway: Gateway) {
    this.gatewayService.selectedGateway=gateway;
  }

  onDelete(id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.gatewayService.deletGateway(id).subscribe((res) => {
        this.refreshGatewayList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

 