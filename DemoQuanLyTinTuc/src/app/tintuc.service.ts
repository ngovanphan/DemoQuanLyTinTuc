import { Injectable } from '@angular/core';
import { TinTuc } from './tintuc.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})
};
@Injectable()
export class TintucService {

  private tinTucUrl = 'http://novapa:3000/tintuc';
  // lấy danh sách tin tức ở file db.json
  getTinTuc(): Observable<TinTuc[]> {
    // return this.tinTucList;
    return this.http.get<TinTuc[]>(this.tinTucUrl).pipe();
  }
  // lấy tin tức theo id
  getTinTucById(id: number): Observable<TinTuc> {
    // return this.tinTucList.find((tintuc) => tintuc.ma === id);
    const url = `${this.tinTucUrl}/${id}`;
    return this.http.get<TinTuc>(url).pipe();
  }
  // thêm mới tin tức
  addTinTuc(tintucmoi: TinTuc): Observable<TinTuc> {
    return this.http.post<TinTuc>(this.tinTucUrl, tintucmoi, httpOptions).pipe();
  }
  // chỉnh sửa tin tức
  updatetinTuc(tintucUpdate: TinTuc): Observable<TinTuc> {
    const url = `${this.tinTucUrl}/${tintucUpdate.id}`;
    return this.http.put<TinTuc>(url, tintucUpdate, httpOptions).pipe();
  }
  // xóa tin tức
  deleteTinTuc(tintucId: number): Observable<TinTuc> {
    const url = `${this.tinTucUrl}/${tintucId}`;
    return this.http.delete<TinTuc>(url, httpOptions).pipe();
  }
  constructor(
    private http: HttpClient
  ) { }

}
