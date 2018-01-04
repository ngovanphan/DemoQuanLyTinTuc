import { Component, OnInit, Input } from '@angular/core';
import { TinTuc } from '../tintuc.model';
import { TintucService } from '../tintuc.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-tintuc',
  templateUrl: './list-tintuc.component.html',
  styleUrls: ['./list-tintuc.component.css']
})
export class ListTintucComponent implements OnInit {
  tinTucList: TinTuc[];
  selectTinTuc: TinTuc;

  constructor(private route: ActivatedRoute, private tinTucService: TintucService) { }

  ngOnInit() {
    this.getTinTuc();
  }
  getTinTuc(): void {
    // this.tinTucList = this.tinTucService.getTinTuc();
    this.tinTucService.getTinTuc().subscribe(tintuc => this.tinTucList = tintuc);
  }
  deleteTinTuc(tintucId: number): void {
    const ma = +this.route.snapshot.paramMap.get('ma');
    // this.tintuc = this.tinTucService.getTinTucById(ma);
    this.tinTucService.deleteTinTuc(tintucId).subscribe(_ => {
      this.tinTucList = this.tinTucList.filter(eachTinTuc => eachTinTuc.id !== tintucId);
    });
  }
  // onSelect(tinTuc: TinTuc): void {
  //   this.selectTinTuc = tinTuc;
  // }
}
