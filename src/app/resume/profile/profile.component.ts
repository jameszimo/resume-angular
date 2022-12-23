import {Component, Input, OnInit} from '@angular/core';
import {ViewportService} from '../../service/viewport.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileTitle = 'profile:';
  viewportSizeClass: string = "";

  @Input() profileContent: string = "";

  constructor(private viewportService: ViewportService) {
  }

  ngOnInit(): void {
    this.viewportService.getViewportClass().subscribe(result => this.viewportSizeClass = result);
  }
}
