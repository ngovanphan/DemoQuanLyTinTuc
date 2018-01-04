import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TinTuc } from '../tintuc.model';
import { TintucService } from '../tintuc.service';

@Component({
  selector: 'app-add-tintuc',
  templateUrl: './add-tintuc.component.html',
  styleUrls: ['./add-tintuc.component.css']
})
export class AddTintucComponent implements OnInit {
  tinTucList: TinTuc[];
  constructor(private tinTucService: TintucService, private location: Location) { }

  ngOnInit() {
    this.getTinTuc();
  }
  getTinTuc(): void {
    // this.tinTucList = this.tinTucService.getTinTuc();
    this.tinTucService.getTinTuc().subscribe(tintuc => this.tinTucList = tintuc);
  }
  goBack(): void {
    this.location.back();
  }
  add(tieuDe: string, noiDung: string, image: string): void {
    tieuDe = tieuDe.trim();
    noiDung = noiDung.trim();
    image = image.trim();
    if (!tieuDe || !noiDung || !image) {
      alert('không được để trống');
      return;
    }
    const tintucMoi: TinTuc = new TinTuc();
    tintucMoi.tieuDe = tieuDe;
    tintucMoi.noiDung = noiDung;
    tintucMoi.image = image;
    this.tinTucService.addTinTuc(tintucMoi).subscribe(insertTinTuc => {this.tinTucList.push(insertTinTuc); });
    this.location.back();
  }
}
