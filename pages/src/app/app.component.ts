import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?b=1&s=170667a&w=0&k=20&c=AWY54kmUT9IcXJZdSdxxm5JUFK_3fxpmMbWQ6IhEG50='
    },
    {
      title: 'New York',
      url: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?b=1&s=170667a&w=0&k=20&c=pSGVgYmze-7eDhOt6jr5xgfVKbwDeh969KLEt-isd1A="
    },
    {
      title: 'Baseball',
      url: 'https://media.istockphoto.com/id/1411707092/photo/baseball-on-dirt-gravel.jpg?b=1&s=170667a&w=0&k=20&c=5U-67_168nJHPzw2z5w6NbT-YhCpjmf_7E3V2z18TlY='
    },
    {
      title: 'Forest',
      url: 'https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?b=1&s=170667a&w=0&k=20&c=hlnBZMaXDoHYR77cbaK-mi8uYGI3xsw9A0pAd3Roaqo='
    },
    {
      title: 'At the beach',
      url: 'https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?b=1&s=170667a&w=0&k=20&c=AWY54kmUT9IcXJZdSdxxm5JUFK_3fxpmMbWQ6IhEG50='
    },
    {
      title: 'New York',
      url: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?b=1&s=170667a&w=0&k=20&c=pSGVgYmze-7eDhOt6jr5xgfVKbwDeh969KLEt-isd1A="
    },
    {
      title: 'Baseball',
      url: 'https://media.istockphoto.com/id/1411707092/photo/baseball-on-dirt-gravel.jpg?b=1&s=170667a&w=0&k=20&c=5U-67_168nJHPzw2z5w6NbT-YhCpjmf_7E3V2z18TlY='
    },
    {
      title: 'Forest',
      url: 'https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?b=1&s=170667a&w=0&k=20&c=hlnBZMaXDoHYR77cbaK-mi8uYGI3xsw9A0pAd3Roaqo='
    },
    {
      title: 'At the beach',
      url: 'https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?b=1&s=170667a&w=0&k=20&c=AWY54kmUT9IcXJZdSdxxm5JUFK_3fxpmMbWQ6IhEG50='
    },
    {
      title: 'New York',
      url: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?b=1&s=170667a&w=0&k=20&c=pSGVgYmze-7eDhOt6jr5xgfVKbwDeh969KLEt-isd1A="
    },
    {
      title: 'Baseball',
      url: 'https://media.istockphoto.com/id/1411707092/photo/baseball-on-dirt-gravel.jpg?b=1&s=170667a&w=0&k=20&c=5U-67_168nJHPzw2z5w6NbT-YhCpjmf_7E3V2z18TlY='
    },
    {
      title: 'Forest',
      url: 'https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?b=1&s=170667a&w=0&k=20&c=hlnBZMaXDoHYR77cbaK-mi8uYGI3xsw9A0pAd3Roaqo='
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
