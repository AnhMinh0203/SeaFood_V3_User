import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CategoryDetail } from './layouts/category-detail/category-detail';
import { Body } from './layouts/home/body/body';
import { Product } from './pages/product/product';

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
        component: Product
    }

];
