import { Injectable } from '@angular/core';
import { IModal } from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  

  private modals: IModal[] = [];
  // private visible: boolean = false;

  constructor() { }

  isModalOpen(id: string) : boolean{
     // this are 2 ways for converting a non boolean value to boolean
    // Boolean(this.modals.find(element => element.id === id)?.visible)
    return !!this.modals.find(element => element.id === id)?.visible
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)
    if(modal){
      modal.visible = !modal.visible
    }
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }
}
