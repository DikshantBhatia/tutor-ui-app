import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tag } from '../../models/types';

@Component({
  selector: 'app-tf-tag-list',
  templateUrl: './tf-tag-list.component.html',
  styleUrls: ['./tf-tag-list.component.scss']
})
export class TfTagListComponent implements OnInit {

  @Input() tags : Tag[];
  @Input() selectedTagIds : any[];
  @Output() selectTag: EventEmitter<Tag> = new EventEmitter();
  @Output() removeTag: EventEmitter<Tag> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('inside tag-list: ' + this.tags);
    if(this.selectedTagIds && this.selectedTagIds.length) {
      this.tags.forEach(tag => {
        if(this.selectedTagIds.indexOf(tag.id) >=0) {
          tag.selected = true;
        }
      });
    }
  }

  onToggle(tag:Tag) {
    tag.selected= !tag.selected;
    if (tag.selected) {
      // emit event
      console.log('tag selected');
      this.selectTag.emit(tag);
    } else {
      // emit event
      this.removeTag.emit(tag);
      console.log('tag deselected');
    }
  }

}
