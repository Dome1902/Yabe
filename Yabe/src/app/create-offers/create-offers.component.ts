import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    
  }
  
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

  post() {
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
