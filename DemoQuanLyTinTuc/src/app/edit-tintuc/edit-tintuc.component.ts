import { Component, OnInit, Input } from '@angular/core';
import { TinTuc } from '../tintuc.model';
import { TintucService } from '../tintuc.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-tintuc',
  templateUrl: './edit-tintuc.component.html',
  styleUrls: ['./edit-tintuc.component.css']
})
export class EditTintucComponent implements OnInit {
  @Input() tintuc: TinTuc;
  constructor(private tintucSerVice: TintucService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getTinTucByMa();
  }
  getTinTucByMa(): void {
    const ma = +this.route.snapshot.paramMap.get('ma');
    // this.tintuc = this.tinTucService.getTinTucById(ma);
    this.tintucSerVice.getTinTucById(ma).subscribe(tintuc => this.tintuc = tintuc);
  }
  update(): void {
    this.tintucSerVice.updatetinTuc(this.tintuc).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
