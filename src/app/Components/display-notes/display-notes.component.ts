import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() notesArraylist:any;
  token:any;
  title : any;
  message : any;

  constructor(private userService: NotesServiceService,public dialog: MatDialog) { }

  openDialog(noteObjet:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '650px',
      data: noteObjet,
    });

    dialogRef.afterClosed().subscribe(result => {
   
      this.title = result;
      this.message = result;
    });
  }

  ngOnInit(): void {
    console.log("notesArraylist",this.notesArraylist)
    // this.token=localStorage.getItem('token');
    // this.getAllNotes();
  }
//   getAllNotes() {
//     this.userService.userGetAllNotes(this.token).subscribe((response: any) => {
//     console.log(response)
//   })
// }
}

