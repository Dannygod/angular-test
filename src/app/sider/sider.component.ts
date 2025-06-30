import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sider',
  standalone: false,
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent {
  private _isCollapsed = false;
  
  @Input() 
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }
  
  set isCollapsed(value: boolean) {
    this._isCollapsed = value;
  }
  
  @Output() isCollapsedChange = new EventEmitter<boolean>();
  
  onCollapsedChange(value: boolean) {
    this.isCollapsed = value;
    this.isCollapsedChange.emit(value);
  }

  // 導航選單配置
  menuItems = [
    { 
      routerLink: '/home', 
      icon: 'fa-solid fa-home', 
      label: '首頁' 
    },
    { 
      routerLink: '/member', 
      icon: 'fa-solid fa-user', 
      label: '個人資料' 
    },
    { 
      routerLink: '/setting', 
      icon: 'fa-solid fa-gear', 
      label: '設定' 
    },
    { 
      routerLink: '', 
      icon: 'fa-solid fa-right-from-bracket', 
      label: '登出' 
    }
  ];
}
