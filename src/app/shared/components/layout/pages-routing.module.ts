import { NgModule } from "@angular/core";
import { Route, Router, RouterModule, Routes } from "@angular/router";
import { UserPostsComponent } from "src/app/components/user-posts/user-posts.component";
import { UserComponent } from "src/app/components/user/user.component";
import { UsersComponent } from "src/app/components/users/users.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        // გაწერილია ერთი ლინკი და მისი შესაბამისი შვილი ლინკები
        path: '', component: LayoutComponent, children: [
            { path: '', component: MainPageComponent},
            { path: 'Users', component: UsersComponent },
            { path: 'Users/:id', component: UserComponent },
            { path: 'Users/:id/Posts', component: UserPostsComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageRoutingModule { }