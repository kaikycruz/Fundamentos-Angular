import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { DisableDirective } from './directives/disabled.directive';
import { ListenerDirective } from './directives/listener.directive';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ComDiretivaComponent,
    DisableDirective,
    ListenerDirective,
    FocusSecondInputDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
