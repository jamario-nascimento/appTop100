import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit(): void {

    this.nativeAudio.preloadComplex('radio', '../../assets/img/music.mp3', 1, 1, 0);
  }

  playAudio() {
    this.nativeAudio.play('radio')
    console.log('chamou')
  }

}
