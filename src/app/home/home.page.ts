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
    this.nativeAudio.preloadComplex('radio', 'https://f57.fabricahost.com.br/top100fm?f=1654218494Naefa5693aef8d82b3cef129ea92f9547', 1, 1, 0).then(() => {
      this.nativeAudio.play('radio')
    })
  }

  playAudio(opt) {
    if ( opt == 'play') {
      this.nativeAudio.play('radio')
      console.log('chamou play')
    } else if ( opt == 'pause') {
      this.nativeAudio.stop('radio')
      console.log('chamou pause')
    }
  }

}
