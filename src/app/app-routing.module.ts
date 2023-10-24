import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerLandingComponent } from './components/customer-landing/customer-landing.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerOrdComponent } from './components/customer-ord/customer-ord.component';
import { CustomerOrderHistoryComponent } from './components/customer-order-history/customer-order-history.component';
import { CustomerPaymentComponent } from './components/customer-payment/customer-payment.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { CustomerRelationshipLandingComponent } from './components/customer-relationship-landing/customer-relationship-landing.component';
import { DeleteRestaurantComponent } from './components/delete-restaurant/delete-restaurant.component';
import { MainlandingpageComponent } from './components/mainlandingpage/mainlandingpage.component';
import { NonvegproductComponent } from './components/nonvegproduct/nonvegproduct.component';
import { OrderManagerLandingComponent } from './components/order-manager-landing/order-manager-landing.component';
import { OrderManagerComponent } from './components/order-manager/order-manager.component';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { RestaurantManagerComponent } from './components/restaurant-manager/restaurant-manager.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantproductComponent } from './components/restaurantproduct/restaurantproduct.component';
import { RestmgrComponent } from './components/restmgr/restmgr.component';
import { SearchRestaurantComponent } from './components/search-restaurant/search-restaurant.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { VegproductComponent } from './components/vegproduct/vegproduct.component';
import { ViewRestaurantComponent } from './components/view-restaurant/view-restaurant.component';
import { ViewcustomerComponent } from './components/viewcustomer/viewcustomer.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { ViewtransactionComponent } from './components/viewtransaction/viewtransaction.component';
import { WebsiteAdminComponent } from './components/website-admin/website-admin.component';
import { WebsiteLandingComponent } from './components/website-landing/website-landing.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ForgotAuthorityPasswordComponent } from './components/forgot-authority-password/forgot-authority-password.component';
import { ProductComponent } from './components/product/product.component';
import { UpdatepriceComponent } from './components/updateprice/updateprice.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'customer', component: CustomerLandingComponent },
  { path: 'products', component: ProductLandingComponent },
  { path: 'product', component: ProductComponent },
  { path: 'updateprice' , component: UpdatepriceComponent},
  { path: 'vegproducts', component: VegproductComponent },
  { path: 'nonvegproducts', component: NonvegproductComponent },
  { path: 'customerlogin', component: CustomerLoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: CustomerOrdComponent },
  { path: 'payment', component: CustomerPaymentComponent },
  { path: 'orderhistory', component: CustomerOrderHistoryComponent },
  { path: 'profile', component: CustomerProfileComponent },
  { path: 'main', component: MainlandingpageComponent },
  { path: 'restaurant', component: RestaurantComponent },
  {
    path: 'operation', component: RestmgrComponent, children: [
      { path: 'ormanager', component: OrderManagerComponent },
      { path:'crmanager',component:RestaurantManagerComponent},
      { path:'viewcustomer',component:ViewcustomerComponent},
      { path:'transaction',component:ViewtransactionComponent},
      { path:'restaurantproducts',component:RestaurantproductComponent},
      { path:'viewproducts',component:ViewproductsComponent},
    ]
  },
  { path:'update',component:UpdateproductComponent},
  { path:'cr',component:CustomerRelationshipLandingComponent},
  { path:'or',component:OrderManagerLandingComponent},
  { path:'admin',component:WebsiteAdminComponent},
  { path:'landing',component:WebsiteLandingComponent},
  { path:'view',component:ViewRestaurantComponent},
  { path:'delete',component:DeleteRestaurantComponent},
  { path:'restaurantupdate',component:UpdateRestaurantComponent},
  { path:'search',component:SearchRestaurantComponent},
  { path:'forgotpassword',component:ForgotpasswordComponent},
  { path:'forgotAuthorityPassword',component: ForgotAuthorityPasswordComponent},
  { path:'register',component:CustomerRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
