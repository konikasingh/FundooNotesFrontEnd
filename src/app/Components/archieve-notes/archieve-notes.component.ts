import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-archieve-notes',
  templateUrl: './archieve-notes.component.html',
  styleUrls: ['./archieve-notes.component.scss']
})
export class ArchieveNotesComponent implements OnInit {
  

  constructor(private userService: NotesServiceService) { }

  ngOnInit(): void {
   
  }
  

}
