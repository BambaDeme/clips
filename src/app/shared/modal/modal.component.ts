import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  visible!: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.visible = this.modalService.visible;
  }

  toggleModal(){
    this.visible = !this.visible;
  }
}
