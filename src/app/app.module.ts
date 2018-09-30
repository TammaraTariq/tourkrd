import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErbilrestaurantComponent } from './erbilrestaurant/erbilrestaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { ErbilComponent } from './erbil/erbil.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ErbilhotelComponent } from './erbilhotel/erbilhotel.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ThingtodoinerbilComponent } from './thingtodoinerbil/thingtodoinerbil.component';
import { DuhokcityComponent } from './duhokcity/duhokcity.component';
import { DuhokRestaurantComponent } from './duhok-restaurant/duhok-restaurant.component';
import { DuhokresortsComponent } from './duhokresorts/duhokresorts.component';
import { DuhokhotelComponent } from './duhokhotel/duhokhotel.component';
import { ThingstodoinduhokComponent } from './thingstodoinduhok/thingstodoinduhok.component';
import { SulaimaniacityComponent } from './sulaimaniacity/sulaimaniacity.component';
import { SulaimaniarestuarantComponent } from './sulaimaniarestuarant/sulaimaniarestuarant.component';
import { SulaimaniyahresortsComponent } from './sulaimaniyahresorts/sulaimaniyahresorts.component';
import { SulaimaniyahhotelComponent } from './sulaimaniyahhotel/sulaimaniyahhotel.component';
import { ThingstodoinsulaymaniyahComponent } from './thingstodoinsulaymaniyah/thingstodoinsulaymaniyah.component';
import { PlanyourtripComponent } from './planyourtrip/planyourtrip.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes:Routes = [
  { path:'' , redirectTo:'home' , pathMatch:'full' },
  { path:'home', component:HomeComponent},
  { path:'erbil', component:ErbilComponent },
  { path:'erbil/erbilrestaurant' ,component:ErbilrestaurantComponent},
  { path:'erbil/erbilhotel' ,component:ErbilhotelComponent},
  { path:'erbil/resorts' ,component:ResortsComponent},
  { path:'erbil/thingtodoinerbil' ,component:ThingtodoinerbilComponent},
  { path:'duhokcity' ,component:DuhokcityComponent},
  { path:'duhokcity/duhokrestaurant' ,component:DuhokRestaurantComponent},
  { path:'duhokcity/duhokresorts' ,component:DuhokresortsComponent},
  { path:'duhokcity/duhokhotel' ,component:DuhokhotelComponent},
  { path:'duhokcity/thingstodoinduhok' ,component:ThingstodoinduhokComponent},
  { path:'sulaimaniacity' ,component:SulaimaniacityComponent},
  { path:'sulaimaniacity/sulaimaniarestuarant' ,component:SulaimaniarestuarantComponent},
  { path:'sulaimaniacity/sulaimaniyahresorts' ,component:SulaimaniyahresortsComponent},
  { path:'sulaimaniacity/sulaimaniyahhotel' ,component:SulaimaniyahhotelComponent},
  { path:'sulaimaniacity/thingstodoinsulaymaniyah' ,component:ThingstodoinsulaymaniyahComponent},
  { path:'planyourtrip' ,component:PlanyourtripComponent},
  { path:'aboutus' ,component:AboutusComponent},
]




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErbilComponent,
    ErbilrestaurantComponent,
    ErbilhotelComponent,
    ResortsComponent,
    ThingtodoinerbilComponent,
    DuhokcityComponent,
    DuhokRestaurantComponent,
    DuhokresortsComponent,
    DuhokhotelComponent,
    ThingstodoinduhokComponent,
    SulaimaniacityComponent,
    SulaimaniarestuarantComponent,
    SulaimaniyahresortsComponent,
    
    SulaimaniyahhotelComponent,
    
    ThingstodoinsulaymaniyahComponent,
    
    PlanyourtripComponent,
    
    FooterComponent,
    
    AboutusComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
