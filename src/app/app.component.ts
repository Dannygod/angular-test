import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NzIconModule, NzLayoutModule, NzMenuModule, SiderComponent, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;
  isCollapsedChange = {
    emit: (value: boolean) => {
      this.isCollapsed = value;
    }
  };
}
