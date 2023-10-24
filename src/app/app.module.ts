import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerLandingComponent } from './components/customer-landing/customer-landing.component';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { VegproductComponent } from './components/vegproduct/vegproduct.component';
import { NonvegproductComponent } from './components/nonvegproduct/nonvegproduct.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerPaymentComponent } from './components/customer-payment/customer-payment.component';
import { CustomerOrdComponent } from './components/customer-ord/customer-ord.component';
import { CustomerOrderHistoryComponent } from './components/customer-order-history/customer-order-history.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestmgrComponent } from './components/restmgr/restmgr.component';
import { OrderManagerComponent } from './components/order-manager/order-manager.component';
import { RestaurantManagerComponent } from './components/restaurant-manager/restaurant-manager.component';
import { ViewcustomerComponent } from './components/viewcustomer/viewcustomer.component';
import { ViewtransactionComponent } from './components/viewtransaction/viewtransaction.component';
import { RestaurantproductComponent } from './components/restaurantproduct/restaurantproduct.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { CustomerRelationshipLandingComponent } from './components/customer-relationship-landing/customer-relationship-landing.component';
import { SearchOrderPipe } from './pipes/search-order.pipe';
import { SearchCRPipe } from './pipes/search-cr.pipe';
import { OrderManagerLandingComponent } from './components/order-manager-landing/order-manager-landing.component';
import { WebsiteAdminComponent } from './components/website-admin/website-admin.component';
import { WebsiteLandingComponent } from './components/website-landing/website-landing.component';
import { ViewRestaurantComponent } from './components/view-restaurant/view-restaurant.component';
import { SearchRestaurantComponent } from './components/search-restaurant/search-restaurant.component';
import { DeleteRestaurantComponent } from './components/delete-restaurant/delete-restaurant.component';
import { restFilterPipe } from './pipes/restFilter.pipe';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { ForgotAuthorityPasswordComponent } from './components/forgot-authority-password/forgot-authority-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CustomerLandingComponent,
    ProductLandingComponent,
    VegproductComponent,
    NonvegproductComponent,
    CustomerLoginComponent,
    CartComponent,
    CustomerPaymentComponent,
    CustomerOrdComponent,
    CustomerProfileComponent,
    CustomerOrderHistoryComponent,
    RestaurantComponent,
    RestmgrComponent,
    OrderManagerComponent,
    RestaurantManagerComponent,
    ViewcustomerComponent,
    ViewtransactionComponent,
    RestaurantproductComponent,
    ViewproductsComponent,
    UpdateproductComponent,
    CustomerRelationshipLandingComponent,
    SearchOrderPipe,
    SearchCRPipe,
    OrderManagerLandingComponent,
    WebsiteAdminComponent,
    WebsiteLandingComponent,
    ViewRestaurantComponent,
    SearchRestaurantComponent,
    DeleteRestaurantComponent,
    UpdateRestaurantComponent,
    restFilterPipe,
    ForgotpasswordComponent,
    CustomerRegistrationComponent,
    ForgotAuthorityPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
