import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = '/api';
  constructor(private httpClient: HttpClient) { }

  getFeedbacks() {
    return this.httpClient.get(`${this.baseUrl}` + '/feedbacks');
  }

  putFeedbacks(feedback:Feedback) {
    return this.httpClient.post(`${this.baseUrl}` + '/addfeedback',feedback);
  }
}
