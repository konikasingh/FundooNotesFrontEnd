import { Component, Input, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  
  notes:any;
  constructor( private userService: NotesServiceService) { }
  
  ngOnInit(): void {
    
  }
  
}
