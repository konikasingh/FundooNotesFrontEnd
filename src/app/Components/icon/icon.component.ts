import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() CardObject: any
  token:any;

  @Output() changeColorOfNote = new EventEmitter<any>();
  Colors=[
    {
      name: 'secondary-color-dark', colorcode: '#9933CC'
    },
    {
      name: 'pink lighten-1', colorcode: '#ec407a'
    },
    {
      name: 'Yellow', colorcode: '#FFFEA9'
    },
    {
      name: 'Light Green', colorcode: '#E4E978'
    },
    {
      name: 'Teal', colorcode: '#CDF0EA'
    },
    {
      name: 'Gray', colorcode: '#E8EAED'
    },
    {
      name: 'Red', colorcode: '#F28B82'
    },
    {
      name: 'Orange', colorcode: '#FBBC05'
    },
    {
      name: 'Dark Blue', colorcode: '#AECBFA'
    },
    {
      name: 'Pink', colorcode: '#FDCFE8'
    },{
      name: 'Yellow', colorcode: '#FFFEA9'
    },
    {
      name: 'Light Green', colorcode: '#E4E978'
    }
    
  ]

  constructor(private userService: NotesServiceService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    console.log(this.CardObject);
  }
  
  setColor(noteColor:any){

    let data = {
      id: [this.CardObject.notesId],
      color: noteColor
    }
    this.userService.colorNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      this.changeColorOfNote.emit(noteColor)
    })
  }

  archiveNote(){
    console.log(this.CardObject.notesId);
    let data = { id: this.CardObject.notesId }
    this.userService.archiveNotes(data,this.token).subscribe((response: any) => {
      console.log(response);
    })
  }
  Trash(){
    console.log(this.CardObject.notesId);
    let data = { id: this.CardObject.notesId }
    this.userService.trashNotes(data,this.token).subscribe((response: any) => {
      console.log(response);
    })
  }

}
