import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = '/api';
  constructor(private httpClient: HttpClient) { }

  getStatuses() {
    return this.httpClient.get(`${this.baseUrl}` + '/status');
  }

  getStatusById(id: number) {
    return this.httpClient.get(`${this.baseUrl}` + '/statusbyid/' + id);
  }
}
