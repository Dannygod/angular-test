import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  standalone: false,
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  // 語言切換
  language: 'zh-TW' | 'en' = 'zh-TW';
  setLanguage(lang: 'zh-TW' | 'en') {
    this.language = lang;
    // 實際專案可串接 ngx-translate
  }

  // 主題切換
  theme: 'light' | 'dark' = 'light';
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    // 實際專案可切換 body class
  }

  // 個人資料編輯
  profile = {
    name: 'Danny Hsu',
    email: 'danny@example.com',
    intro: '熱愛技術與分享的前端工程師',
    avatar: 'assets/dinosaur_icon.jpg'
  };
  editProfile = { ...this.profile };
  isEditingProfile = false;
  startEditProfile() {
    this.editProfile = { ...this.profile };
    this.isEditingProfile = true;
  }
  saveProfile() {
    this.profile = { ...this.editProfile };
    this.isEditingProfile = false;
  }
  cancelEditProfile() {
    this.isEditingProfile = false;
  }

  // 訂閱通知設定
  notifyNewPost = true;
  notifyComment = false;

  // 匯出文章
  exportType: 'md' | 'pdf' = 'md';
  exportArticle() {
    // 實際專案可串接檔案匯出
    alert(`匯出文章為 ${this.exportType === 'md' ? 'Markdown' : 'PDF'}`);
  }
}
