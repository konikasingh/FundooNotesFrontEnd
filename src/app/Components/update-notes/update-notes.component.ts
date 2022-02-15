import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title:any;
  message:any;
  token:any;

  constructor(private userService: NotesServiceService,public dialogRef: MatDialogRef<UpdateNotesComponent>, 
    @Inject(MAT_DIALOG_DATA) public note: any) { }

  ngOnInit(): void {
    console.log('data from dialog',this.note)
    this.token=localStorage.getItem('token');
    this.title=this.note.title
    this.message=this.note.message
  }
  Update() {
    let data = {
      id: this.note.notesId,
      title: this.title,
      message: this.message,
  
    }
    this.userService.userUpdateNotes(data,this.token).subscribe((response:any)=>{
      console.log("Note is updated")
      console.log(response)
      
    })
    
    this.dialogRef.close();
  }

}
