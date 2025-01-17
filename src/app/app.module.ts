import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { InputAutocompleteComponent } from './shared/input-autocomplete/input-autocomplete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconComponent } from './header/icon/icon.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { PeopleComponent } from './people/people.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { FeedComponent } from './home/feed/feed.component';
import { FeedPostComponent } from './home/feed-post/feed-post.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputAutocompleteComponent,
    IconComponent,
    HomeComponent,
    PeopleComponent,
    AvatarComponent,
    FeedComponent,
    FeedPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
