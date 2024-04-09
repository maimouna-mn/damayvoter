import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit{
constructor(private http: HttpClient,private router:Router) {}
  ngOnInit(): void {

  }
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  private stream: MediaStream | null = null;

  showBackArrow:boolean=true;
  valider(){
    this.router.navigate(['/authMessage'])
  }
@ViewChild('videoElement') videoElement!: ElementRef;

public cameraStarted = false;
selfieImageUrl: string | null = null;
startCamera() {
  this.cameraStarted = true;
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Erreur d’accès aux appareils multimédia', error);
      });
  } else {
    console.error('getUserMedia non supporté');
  }
}

public imageDataUrl!: any;
public imageCaptured: boolean = false;

takeSelfie(): void {
  this.cameraStarted = true;
  const video = this.videoElement.nativeElement;
  const canvas = this.canvasElement.nativeElement;
  const context = canvas.getContext('2d');
  if (context && video) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.imageDataUrl = canvas.toDataURL('image/png');
    this.imageCaptured = true;
  }

}


retry(): void {
  this.imageCaptured = false;
  this.imageDataUrl = null;
}

closeModal() {
  this.cameraStarted = false;
}


saveImage(): void {
    const capturedImageUrl =this.imageDataUrl;

  this.selfieImageUrl = capturedImageUrl;
  this.cameraStarted = false;

  // this.http.post('url_de_votre_endpoint', { image: this.imageDataUrl })
  //   .subscribe(
  //     () => alert('Image sauvegardée avec succès'),
  //     () => alert('Erreur lors de la sauvegarde de l\'image')
  //   );
}

imageDataUrlRecto: string | null = null;
imageDataUrlVerso: string | null = null;
imageDataUrlSelfie: string | null = null;

onPhotoSelected(event: Event, type: 'recto' | 'verso' | 'selfie') {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = (e.target as FileReader).result as string;
      if (type === 'recto') {
        this.imageDataUrlRecto = imageDataUrl;
      } else if (type === 'verso') {
        this.imageDataUrlVerso = imageDataUrl;
      } else if (type === 'selfie') {
        this.imageDataUrlSelfie = imageDataUrl;
      }
    };
    reader.readAsDataURL(file);
  }
}



}
