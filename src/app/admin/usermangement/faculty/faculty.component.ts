import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChartConfiguration } from 'chart.js';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {
  name = 'Web Developement';
  selectedVideo: File | null = null;
  uploadedVideos: string[] = [];

  batches = [
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
    { name: 'Batch Name' },
  ];

  upcomingBatches = [
    { name: 'B.TECH', startDate: '2024-02-01' },
    { name: 'BCA', startDate: '2024-03-15' },
    { name: 'MCA', startDate: '2024-04-10' },
  ];

  batchData = [
    { year: 2004, strength: 65, presence: 62 },
    { year: 2005, strength: 50, presence: 50 }
  ];

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      { data: [720, 250, 150, 1000, 750, 500], backgroundColor: '#9be1de' },
      { data: [455, 280, 300, 800, 650, 600], backgroundColor: '#a3d1df' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  constructor(
    public router: Router,
    private translate: TranslateService) {
    this.translate.setDefaultLang(environment.language);
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit(): void {
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

  goToFacultyupload() {
    this.router.navigate(['./facultyupload']);
  }

}
