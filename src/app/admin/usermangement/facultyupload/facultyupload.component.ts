import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facultyupload',
  templateUrl: './facultyupload.component.html',
  styleUrls: ['./facultyupload.component.scss']
})
export class FacultyuploadComponent {
  selectedVideo: File | null = null;
  uploadedVideos: string[] = [];

  constructor(
    public router: Router,
    private translate: TranslateService) {
    this.translate.setDefaultLang(environment.language);
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngOnInit(): void {
    const savedVideoData = sessionStorage.getItem('savedVideo');
    if (savedVideoData) {
      this.videoPlayer.nativeElement.src = savedVideoData;
    }
  }



  uploadVideo(): void {
    if (this.selectedVideo) {
      const reader = new FileReader();
      reader.onload = () => {
        const videoData = reader.result as string;
        localStorage.setItem('savedVideo', videoData);
        this.videoPlayer.nativeElement.src = videoData;
        // this.videoPlayer.nativeElement.play(); // auto play video
        alert('Video uploaded and saved!');
      };

      reader.readAsDataURL(this.selectedVideo);
    } else {
      alert('Please select a video before uploading.');
    }
  }


  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedVideo = inputElement.files[0];
    }
  }

  deleteVideo(): void {
    // Clear the video source and reset the selectedVideo
    this.videoPlayer.nativeElement.src = '';
    this.selectedVideo = null;
    localStorage.removeItem('savedVideo');
  }
}
