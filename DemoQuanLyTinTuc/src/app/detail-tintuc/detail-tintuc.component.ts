import { Component, OnInit, Input } from '@angular/core';
import { TinTuc } from '../tintuc.model';
import { TintucService } from '../tintuc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-tintuc',
  templateUrl: './detail-tintuc.component.html',
  styleUrls: ['./detail-tintuc.component.css']
})
export class DetailTintucComponent implements OnInit {
  @Input() tintuc: TinTuc;
  constructor(private route: ActivatedRoute, private tinTucService: TintucService, private location: Location ) { }

  ngOnInit() {
    this.getTinTucByMa();
  }
  getTinTucByMa(): void {
    const ma = +this.route.snapshot.paramMap.get('ma');
    // this.tintuc = this.tinTucService.getTinTucById(ma);
    this.tinTucService.getTinTucById(ma).subscribe(tintuc => this.tintuc = tintuc);
  }
  // quay lại trang home
  goBack(): void {
    this.location.back();
  }
}
