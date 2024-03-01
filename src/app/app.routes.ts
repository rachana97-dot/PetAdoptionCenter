import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdoptionCenterComponent } from './adoption-center/adoption-center.component';
import { ContactformComponent } from './contactform/contactform.component';
import { GallaryComponent } from './gallary/gallary.component';
import { PetCareTipsComponent } from './pet-care-tips/pet-care-tips.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        'path': 'home',
        component: HomeComponent
    },
    {
        'path': 'aboutus',
        component: AboutusComponent
    },
    {
        'path': 'adoption-center',
        component: AdoptionCenterComponent
    },
    {
        'path': 'contactform',
        component: ContactformComponent
    },
    {
        'path': 'gallary',
        component: GallaryComponent
    },
    {
        'path': 'pet-care-tips',
        component: PetCareTipsComponent
        },

        {
            'path' : 'Explore More',
            component:HomeComponent
        },
        {
            'path' : 'Adopt Now',
            component:AdoptionCenterComponent
        }
];

