import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createNotesForm!: FormGroup;
  submitted = true;
  card: boolean = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private userService: NotesServiceService ) { }

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      Title: [null, [Validators.required]],
      TakeNote: [null, [Validators.required]],
    });
    
  }

 cardSwap() {
  console.log(this.card);
  return this.card === true ? (this.card = false) : (this.card = true);

}
  onSubmit() {
  this.submitted = true;
  if (this.createNotesForm.valid) {
    console.log(this.createNotesForm.value);
    let CreateNote = {
      "id": 0,
      "notesId": 0,
      "title": this.createNotesForm.value.Title,
      "message":this.createNotesForm.value.TakeNote,
      "color": "string",
      "image": "string",
      "isArchive": true,
      "isPin": true,
      "isTrash": true,
      "createat": "2022-02-09T06:08:53.431Z",
      "modifiedat": "2022-02-09T06:08:53.431Z"
    }
    this.userService.userCreateNotes(CreateNote, this.token).subscribe((response: any) => {
      console.log(response)
    })
  }
  else {
    console.log("invalid");
  }
 }
}


