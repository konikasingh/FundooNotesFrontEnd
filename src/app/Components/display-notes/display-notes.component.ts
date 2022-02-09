import { Component, Input, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notesArraylist:any;
  token:any;
  constructor(private userService: NotesServiceService) { }

  ngOnInit(): void {
    // this.token=localStorage.getItem('token');
    // this.getAllNotes();
  }
//   getAllNotes() {
//     this.userService.userGetAllNotes(this.token).subscribe((response: any) => {
//     console.log(response)
//   })
// }
}

