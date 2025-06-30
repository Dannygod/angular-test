import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { MemberComponent } from './member/member.component';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        SettingComponent,
        MemberComponent,
        SiderComponent,
        HeaderComponent,
        
    ],
    bootstrap: [AppComponent],
    imports:[
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        NzLayoutModule,
        NzMenuModule,
        RouterModule.forRoot(routes)
    ],
})
export class AppModule {}