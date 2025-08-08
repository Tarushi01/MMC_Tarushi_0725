import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Post } from './components/post/post';
import { Products } from './components/products/products';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home', component:Home},
    {path:'post', component:Post},
    {path:'products', component:Products},
];

