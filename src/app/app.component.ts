import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shop-List';

  loadedFeatureData = 'recipe';

  onNavigate(dataFromFeature: string){

    this.loadedFeatureData = dataFromFeature;
    console.log('Data From header APP compo'+dataFromFeature);

  }


 // console.log('jkhkjhkjhk');
}
