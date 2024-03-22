import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-provider',
  templateUrl: './content-provider.component.html',
  styleUrls: ['./content-provider.component.scss']
})
export class ContentProviderComponent {
  selectedVideo: File | null = null;
  uploadedVideos: string[] = [];

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit(): void {
  }

  uploadVideo(event: Event): void {
    event.preventDefault();
    const inputElement = event.target as HTMLFormElement;
    const videoInput = inputElement.querySelector('#videoInput') as HTMLInputElement;

    if (videoInput.files && videoInput.files.length > 0) {
      const videoFile = videoInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const videoData = reader.result as string;
        localStorage.setItem('savedVideo', videoData);
        this.videoPlayer.nativeElement.src = videoData;
        //this.videoPlayer.nativeElement.play(); // Play the video
        this.selectedVideo = videoFile;
        // Re-enable the "Choose File" input after uploading
        videoInput.value = '';
        alert('Video uploaded and saved!');
      };

      reader.readAsDataURL(videoFile);
    }
  }
  deleteVideo(): void {
    // Clear the video source and reset the selectedVideo
    this.videoPlayer.nativeElement.src = '';
    this.selectedVideo = null;
    localStorage.removeItem('savedVideo');
  }


  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedVideo = inputElement.files[0];
    }
  }
}
