import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ApiCurrencyComponent } from './api-currency/api-currency.component';
import { FooterComponent } from './footer/footer.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { ApiYoutubeComponent } from './api-youtube/api-youtube.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ApiEconomyActualityComponent } from './api-economy-actuality/api-economy-actuality.component';
import { EconomyActualityPageComponent } from './economy-actuality-page/economy-actuality-page.component';
import { FormsModule } from '@angular/forms';
import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { PagePlaylistComponent } from './page-playlist/page-playlist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PageOnevideoComponent } from './page-onevideo/page-onevideo.component';
import { ApiYoutubeVideoComponent } from './api-youtube-video/api-youtube-video.component';
import { FormPlaylistComponent } from './form-playlist/form-playlist.component';
import { FormUpdatePlaylistPageComponent } from './form-update-playlist-page/form-update-playlist-page.component';
import { NewPlaylistPage } from './new-playlist-page/new-playlist-page.component';


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "238523767005-90jndv6p8oot3la91kv9u7kg9b3kaj2i.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
  ux_mode: "popup",
  scope: [
      "https://www.googleapis.com/auth/youtube"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    ApiCurrencyComponent,
    FooterComponent,
    EconomicCalendarComponent,
    ApiYoutubeComponent,
    TutorialPageComponent,
    HomePageComponent,
    ApiEconomyActualityComponent,
    EconomyActualityPageComponent,
    PagePlaylistComponent,
    PlaylistComponent,
    FormUpdatePlaylistPageComponent,
    PageOnevideoComponent,
    ApiYoutubeVideoComponent,
    FormPlaylistComponent,
    NewPlaylistPage
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [ApiYoutubeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
