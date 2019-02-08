import { Component, OnInit } from '@angular/core';
import { YoutubeAuthService } from './../youtube-auth.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlistsUser;
  videosPlaylists;

  

  constructor(private youtubeAuth: YoutubeAuthService) { }

  ngOnInit(){
    this.getPlaylists();
    
  }
  getPlaylists(){
    let args = {
      clientId: '238523767005-90jndv6p8oot3la91kv9u7kg9b3kaj2i.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly',
      apiKey: "AIzaSyBQfBCA8tKpCL9uQsZNEjYFAGIcrMIh-ak"
    }
    this.youtubeAuth.getPlaylists().subscribe(() => {
      
      let that = this;
      console.log("subscribe passed");
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
          
          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(args).then(
            (value ) => {
              console.log(value)
            },
            (reason ) => {
               console.log(reason) 
            }
          );
          if (gapi.client != undefined) {
            console.log("Gapi has loaded !");
            var data = {
                path: "https://www.googleapis.com/youtube/v3/playlists",
                method: "GET",
                params: {
                part: "snippet",
                mine: true
              }
            }
            gapi.client.request(data).then((response) => {
              
              that.playlistsUser = response["result"]["items"];
              if(that.playlistsUser != undefined){
                console.log(that.playlistsUser);
                document.getElementById("lien-playlists").click();
              }
              
            },
            (reason) => {
              return reason;
            });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });
    
  }

  getVideosPlaylists(idPlaylists: string){
    console.log(idPlaylists);
    this.youtubeAuth.getVideosPlaylists(idPlaylists).subscribe((response: Array<Object>) => {
      this.videosPlaylists = response["items"];
      console.log(this.videosPlaylists);
    });
  }

  onDeleteVideosPlaylist(idVideoPlaylist: string){
    if(confirm("Êtes vous sûr de vouloir supprimer cette vidéo ?")){
      console.log(idVideoPlaylist);
      this.deleteVideoPlaylist(idVideoPlaylist);
      
    }
  }

  deleteVideoPlaylist(idVideoPlaylist: string){
    let args = {
      clientId: '238523767005-90jndv6p8oot3la91kv9u7kg9b3kaj2i.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly',
      apiKey: "AIzaSyBQfBCA8tKpCL9uQsZNEjYFAGIcrMIh-ak"
    }
    this.youtubeAuth.deleteVideoPlaylist().subscribe(() => {
      
      let that = this;
      console.log("subscribe passed");
      //  on load auth2 client
      gapi.load('client:auth2', {
        callback: function () {
          
          console.log("initialisation ...");
          // On initialise gapi.client
          gapi.client.init(args).then(
            (value ) => {
              console.log(value)
            },
            (reason ) => {
               console.log(reason) 
            }
          );
          if (gapi.client != undefined) {
            console.log("Gapi has loaded !");
            var data = {
                path: "/youtube/v3/playlistItems",
                method: "DELETE",
                params: {
                id: idVideoPlaylist
              }
            }
            gapi.client.request(data).then((response) => {
              console.log(response);
              
            },
            (reason) => {
              return reason;
            });
          }

        },
        onerror: function () {
          // Handle loading error.
          alert('gapi.client failed to load!');
        },
        timeout: 5000, // 5 seconds.
        ontimeout: function () {
          // Handle timeout.
          alert('gapi.client could not load in a timely manner!');
        }
      });
    });
  }

}
