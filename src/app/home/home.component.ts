import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  summary: string;
  date: string;
  isPinned: boolean;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {
  // Mock 文章資料
  posts: Post[] = [
    {
      id: 1,
      title: '精選技術主題：Angular 架構實戰',
      summary: '深入解析 Angular 架構設計與最佳實踐。',
      date: '2024-06-01',
      isPinned: true,
      category: 'Angular',
      tags: ['Angular', '前端', '架構']
    },
    {
      id: 2,
      title: 'n8n 自動化工作流入門',
      summary: '用 n8n 打造你的第一個自動化流程。',
      date: '2024-05-28',
      isPinned: false,
      category: 'n8n',
      tags: ['n8n', '自動化', '工具']
    },
    {
      id: 3,
      title: 'AI 工具推薦與應用',
      summary: '盤點 2024 必備 AI 工具與實戰案例。',
      date: '2024-05-20',
      isPinned: false,
      category: 'AI 工具',
      tags: ['AI', '工具', '推薦']
    }
  ];

  // Mock 分類與 tags
  categories = ['全部', 'Angular', 'n8n', 'AI 工具'];
  tags = ['Angular', '前端', '架構', 'n8n', '自動化', '工具', 'AI', '推薦'];

  // 搜尋與篩選
  searchText = '';
  selectedCategory = '全部';
  selectedTag: string | null = null;

  // 作者簡介
  author = {
    name: 'Danny Hsu',
    avatar: 'assets/dinosaur_icon.jpg',
    intro: '熱愛技術與分享的前端工程師'
  };

  get filteredPosts() {
    let result = [...this.posts];
    if (this.selectedCategory !== '全部') {
      result = result.filter(p => p.category === this.selectedCategory);
    }
    if (this.selectedTag) {
      result = result.filter(p => p.tags.includes(this.selectedTag!));
    }
    if (this.searchText) {
      result = result.filter(p =>
        p.title.includes(this.searchText) ||
        p.summary.includes(this.searchText)
      );
    }
    return result;
  }

  get pinnedPosts() {
    return this.filteredPosts.filter(p => p.isPinned);
  }

  get normalPosts() {
    return this.filteredPosts.filter(p => !p.isPinned);
  }

  selectTag(tag: string) {
    this.selectedTag = tag;
  }

  clearTag() {
    this.selectedTag = null;
  }
}
