import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {BackendService} from "../services/backend.service";
/* import { FormControl, FormGroup, Validators } from '@angular/forms'; */

interface Area {
  name: string;
  color: string;
}

@Component({
  selector: 'app-create-offers',
  templateUrl: './create-offers.component.html',
  styleUrls: ['./create-offers.component.css']
})
export class CreateOffersComponent implements OnInit {
  /* @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger */
  constructor(private backend: BackendService) { }



  ngOnInit(): void {

  }

  /* someMethod() {
    this.trigger.openMenu();
  } */

  onClick() {
    /* const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = () => {
      this.file = {
        data: fileInput.files[0],
        inProgress: false,
        progress: 0,
      };
      this.fileUpload.nativeElement.value = '';
      this.uploadFile(); */
  }

  submit() {
    let packet = {
      name: (<HTMLInputElement>document.getElementById("input-title")).value,
      description: (<HTMLInputElement>document.getElementById("input-description")).value,
      image: "Bild-upload funktioniert net"
    }
    this.backend.createArticle(packet).subscribe((resp: any) => {
      console.log(resp);
    })
    /* this.colorLabel = document.getElementById('colorLabel').innerHTML;
    this.form.get('areaId').patchValue(this.selectedArea.name);
    this.form.get('color').patchValue(this.colorLabel);
    this.topicService
      .post(this.form.getRawValue())
      .pipe(tap(() => this.router.navigate(['../'])))
      .subscribe();
      setTimeout(() => {
        location.reload();
      }, 1000); */
  }

  uploadFile() {
    /* const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;

    this.topicService
      .uploadHeaderImage(formData)
      .pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.file.progress = Math.round(
                (event.loaded * 100) / event.total
              );
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.file.inProgress = false;
          return of('Upload failed');
        })
      )
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          this.form.patchValue({ headerImage: event.body.filename });
        }
      }); */
  }
}
