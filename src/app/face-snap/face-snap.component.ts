import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(){
    this.buttonText = "Oh snaps!";
  }

  onSnap(){
    if(this.buttonText == "Oh snaps!"){
      this.faceSnap.snaps++;
      this.buttonText = "Oops unsnap";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh snaps!";
    }
  }
}
