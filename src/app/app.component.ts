import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim velit, tincidunt vitae ultricies vitae, lobortis at purus. Etiam molestie ipsum at nisl vulputate commodo. Vestibulum ultricies suscipit odio. Pellentesque varius erat eget dolor vulputate vestibulum. Vivamus nec ex malesuada, lacinia risus et, dapibus ex. Sed lorem ipsum, vehicula ac sagittis ac, feugiat venenatis erat. Vivamus eu rhoncus felis, id eleifend ipsum. Pellentesque elementum lacinia risus vel ullamcorper. Mauris auctor metus scelerisque, consequat ligula eget, efficitur ante. Curabitur porta erat aliquam mauris porta venenatis. Etiam rutrum malesuada pellentesque. Vestibulum nec velit porta, tincidunt sapien quis, interdum elit. Proin tincidunt, risus vel gravida lobortis, lorem tellus commodo turpis, non porta justo mi eget tortor. ',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim velit, tincidunt vitae ultricies vitae, lobortis at purus. Etiam molestie ipsum at nisl vulputate commodo. Vestibulum ultricies suscipit odio. Pellentesque varius erat eget dolor vulputate vestibulum. Vivamus nec ex malesuada, lacinia risus et, dapibus ex. Sed lorem ipsum, vehicula ac sagittis ac, feugiat venenatis erat. Vivamus eu rhoncus felis, id eleifend ipsum. Pellentesque elementum lacinia risus vel ullamcorper. Mauris auctor metus scelerisque, consequat ligula eget, efficitur ante. Curabitur porta erat aliquam mauris porta venenatis. Etiam rutrum malesuada pellentesque. Vestibulum nec velit porta, tincidunt sapien quis, interdum elit. Proin tincidunt, risus vel gravida lobortis, lorem tellus commodo turpis, non porta justo mi eget tortor. ',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim velit, tincidunt vitae ultricies vitae, lobortis at purus. Etiam molestie ipsum at nisl vulputate commodo. Vestibulum ultricies suscipit odio. Pellentesque varius erat eget dolor vulputate vestibulum. Vivamus nec ex malesuada, lacinia risus et, dapibus ex. Sed lorem ipsum, vehicula ac sagittis ac, feugiat venenatis erat. Vivamus eu rhoncus felis, id eleifend ipsum. Pellentesque elementum lacinia risus vel ullamcorper. Mauris auctor metus scelerisque, consequat ligula eget, efficitur ante. Curabitur porta erat aliquam mauris porta venenatis. Etiam rutrum malesuada pellentesque. Vestibulum nec velit porta, tincidunt sapien quis, interdum elit. Proin tincidunt, risus vel gravida lobortis, lorem tellus commodo turpis, non porta justo mi eget tortor. ',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
