import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent  implements OnInit{

  url1='data:image/jpeg;base64,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';
  url2='https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}


