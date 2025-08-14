import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Addproducts } from './components/addproducts/addproducts';
import { Products } from './components/products/products';
import { Updateproducts } from './components/updateproducts/updateproducts';
import { Deleteproducts } from './components/deleteproducts/deleteproducts';


export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'products', component:Products},
    {path:'addproducts', component:Addproducts},
    {path:'updateproducts', component:Updateproducts},
    {path:'deleteproducts', component:Deleteproducts}
];