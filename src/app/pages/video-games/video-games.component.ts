import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoGame } from 'src/app/models/videoGame';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {
  videoGames: VideoGame[] = [];

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    // use the environment file so that the proper url for each environment is used
    this.httpClient.get<VideoGame[]>(`${environment.apiUrl}/VideoGame`).subscribe({
      next: (results) => {
        this.videoGames = results;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  toggleActive(game: VideoGame): void {
    this.httpClient.post<VideoGame>(`${environment.apiUrl}/VideoGame/ToggleActive`, game).subscribe({
      next: (update) => {
        game.active = update.active;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
