import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MemberComponent {
  // 個人資料
  profile = {
    name: 'Danny Hsu',
    avatar: 'assets/dinosaur_icon.jpg',
    intro: '熱愛技術與分享的前端工程師'
  };

  // 技術棧
  techStack = [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'MongoDB', icon: 'fa-solid fa-database' },
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'n8n', icon: 'fa-solid fa-gears' },
    { name: 'TypeScript', icon: 'fa-solid fa-code' }
  ];

  // 聯絡方式
  contacts = [
    { type: 'Email', value: 'danny@example.com', link: 'mailto:dannyhsu@via.com.tw', icon: 'fa-solid fa-envelope' },
    { type: 'GitHub', value: 'dannyhsu', link: 'https://github.com/dannygod', icon: 'fa-brands fa-github' },
    { type: 'LinkedIn', value: 'Danny Hsu', link: 'https://linkedin.com/in/dannygod', icon: 'fa-brands fa-linkedin' },
    { type: 'Twitter', value: '@dannyhsu', link: 'https://twitter.com/dannygod', icon: 'fa-brands fa-twitter' }
  ];

  // Timeline
  timeline = [
    { year: '2024', event: '開啟個人部落格，專注於 Angular 與自動化' },
    { year: '2023', event: '參與多個開源專案，學習 n8n 與 AI 工具' },
    { year: '2022', event: '成為前端工程師，主攻 React/Angular' },
    { year: '2021', event: '高中畢業，開始自學全端開發' }
  ];

  // GitHub Repo
  githubRepo = 'https://github.com/dannygod';
}
