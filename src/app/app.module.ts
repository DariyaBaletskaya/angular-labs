import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { ProfileComponent } from './profile/profile.component';
import { EmojiDirective } from './emoji.directive';

import { UserService } from '../services/user.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LyThemeModule, LY_THEME, LyCommonModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { LyFieldModule } from '@alyle/ui/field';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyCardModule } from '@alyle/ui/card';
import { LySelectModule } from '@alyle/ui/select';
import { LyIconModule } from '@alyle/ui/icon';
import { LyBadgeModule } from '@alyle/ui/badge';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ButtonComponent,
    EmojiDirective,
    ModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    LyFieldModule,
    LyBadgeModule,
    LyButtonModule,
    LyRadioModule,
    LySelectModule,
    LyCommonModule,
    LyCardModule,
    LyTypographyModule,
    LyIconModule,
    LyThemeModule.setTheme('minima-light')
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    UserService
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
