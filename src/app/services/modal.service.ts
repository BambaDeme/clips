import { Injectable } from '@angular/core';
import { IModal } from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  

  private modals: IModal[] = [];
  // private visible: boolean = false;

  constructor() { }

  isModalOpen(){
    return this.visible;
  }

  toggleModal(){
    this.visible = !this.visible;
  }

  register(id: string) {
    throw new Error('Method not implemented.');
  }
}
