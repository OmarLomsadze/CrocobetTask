import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserPostsComponent } from "src/app/components/user-posts/user-posts.component";
import { UserComponent } from "src/app/components/user/user.component";
import { UsersComponent } from "src/app/components/users/users.component";
import { LoadingInterceptor } from "../../interceptors/loading.interceptor";
import { HttpService } from "../../services/http.service";
import { SpinnerService } from "../../services/spinner.service";
import { LayoutComponent } from "./layout.component";
import { PageRoutingModule } from "./pages-routing.module";

@NgModule({
    declarations: [
        LayoutComponent,
        UserComponent,
        UserPostsComponent,
        UsersComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        PageRoutingModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    providers: [
        HttpService,
        // ინტერსეპტორის ჩაინჯექტება მოდულში
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    ]
})

export class LayoutModule { }