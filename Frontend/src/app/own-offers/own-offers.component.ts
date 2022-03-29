import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {createArticle} from "../globals/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzUploadChangeParam} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-own-offers',
  templateUrl: './own-offers.component.html',
  styleUrls: ['./own-offers.component.css']
})
export class OwnOffersComponent implements OnInit {

  products: Array<createArticle>

  createOfferForm!: FormGroup;

  modalVisible: boolean = false;

  imageb64: string;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private msg: NzMessageService) {
    this.products = new Array<createArticle>();
    this.imageb64 = '';
  }

  submitNewOffer(): void {
    if (this.createOfferForm.valid) {
      if (this.imageb64 === '') {
        this.msg.error('Bitte laden Sie ein Bild hoch.')
      } else {
        let offer = {
          name: this.createOfferForm.value.name,
          description: this.createOfferForm.value.description,
          image: this.imageb64
        }
        console.log(offer);
        this.articleService.createArticle(offer).subscribe({
          next: (resp: any) => {
            this.modalVisible = false;
            this.updateProducts();
          },
          error: err =>  {
            console.log(err);
            if (err.status === 401) {
              this.msg.error('Für das Hochladen eines Angebots müssen Sie angemeldet sein. Bitte prüfen Sie ihren Status');
            } else if (err.status === 413) {
              this.msg.error('Das erstellen des Angebots hat leider nicht geklappt. Bitte probieren Sie es noch einmal mit einem sehr kleinen Bild')
            }
          }
        });
      }
    } else {
      Object.values(this.createOfferForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result)
    }
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  handleCancel(): void {
    this.modalVisible = false;
  }

  openModal(): void {
    this.modalVisible = true;
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.msg.error('Maximum size allowed is ' + max_size / 1000 + 'Mb');
        return false;
      }

      if (allowed_types.indexOf(fileInput.target.files[0].type) < 0) {
        this.msg.error('Only Images are allowed ( JPG | PNG )');
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          // @ts-ignore
          const img_height = rs.currentTarget['height'];
          // @ts-ignore
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);


          if (img_height > max_height && img_width > max_width) {
            this.msg.error('Maximum dimentions allowed ' + max_height + '*' + max_width + 'px');
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.imageb64 = imgBase64Path;
            this.msg.success("Bild hochgeladen")
            // this.previewImagePath = imgBase64Path;
            return true;
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return false;
  }

  updateProducts(): void {
    this.products = new Array<createArticle>();
    this.articleService.getUserArticle().subscribe({
      next: (resp: any) => {
        this.products = resp;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this.updateProducts();
    this.createOfferForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }
}
