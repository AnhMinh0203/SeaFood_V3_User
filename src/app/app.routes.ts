import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CategoryDetail } from './layouts/home/category-detail/category-detail';
import { Body } from './layouts/home/body/body';
import { ProductComponent } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { News } from './pages/news/news';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: Home,
        children: [
            { path: '', pathMatch: 'full', component: Body },
            { path: 'category-detail', component: CategoryDetail },
        ]
    },
    {
        path: 'product/:productID',
        component: ProductComponent
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: 'news',
        component: News
    }

];
