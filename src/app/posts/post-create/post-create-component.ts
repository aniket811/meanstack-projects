import { Component,EventEmitter,Output } from '@angular/core';
@Component({
  selector:'app-post-create',
  templateUrl:"./post-create.component.html",
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
  enteredContent=''
  enteredTitle=''
  @Output() postCreated=new EventEmitter();
  onAddedpost(){
    var post ={title:this.enteredTitle,content:this.enteredContent}
    // this.addpost=postInput.value;
    // console.log(this.addpost)
    this.postCreated.emit(post)
  }


}
