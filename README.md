# Cosmetics E-Commerce - User Frontend

A modern, responsive Angular application for the customer-facing interface of a cosmetics e-commerce platform. Built with Angular 16, this application provides an intuitive shopping experience with product browsing, cart management, and secure checkout.

## Technology Stack

- **Angular**: 16.2.16
- **Angular CLI**: 16.2.16
- **Node.js**: 18.x or higher
- **TypeScript**: 5.x
- **RxJS**: 7.x
- **Bootstrap**: 5.x / Angular Material
- **NGX-Translate**: Internationalization
- **Chart.js**: Data visualization (if needed)

## Features

### User Experience
- Responsive design for mobile, tablet, and desktop
- Intuitive product browsing and search
- Advanced filtering and sorting
- Product quick view
- Wishlist functionality
- Product reviews and ratings

### Authentication
- User registration with email verification
- Secure login with JWT tokens
- Social login integration (Google, Facebook)
- Password recovery
- Profile management

### Shopping Features
- Product catalog with categories
- Product detail pages with image gallery
- Shopping cart with real-time updates
- Wishlist management
- Product comparison
- Recently viewed products

### Checkout Process
- Multi-step checkout process
- Address management
- Multiple payment methods
- Order summary and confirmation
- Order tracking
- Email notifications

### User Account
- Profile management
- Order history
- Address book
- Wishlist
- Account settings
- Newsletter subscription

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Angular CLI 16.2.16

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/tayaria/cosmetics-ecommerce-frontend-user.git
cd cosmetics-ecommerce-frontend-user
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
Update `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  imageUrl: 'http://localhost:8080/uploads',
  stripePublicKey: 'your-stripe-public-key',
  googleClientId: 'your-google-client-id',
  facebookAppId: 'your-facebook-app-id'
};
```

### 4. Run the development server
```bash
ng serve
```

Navigate to `http://localhost:4200/`

## Project Structure

```
cosmetics-user-frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── no-auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── error.interceptor.ts
│   │   │   │   └── loading.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── token.service.ts
│   │   │   │   └── storage.service.ts
│   │   │   └── models/
│   │   │       ├── user.model.ts
│   │   │       └── response.model.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   ├── sidebar/
│   │   │   │   ├── product-card/
│   │   │   │   ├── loading-spinner/
│   │   │   │   └── breadcrumb/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   │   ├── currency-format.pipe.ts
│   │   │   │   └── truncate.pipe.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.scss
│   │   │   ├── products/
│   │   │   │   ├── product-list/
│   │   │   │   ├── product-detail/
│   │   │   │   ├── products.service.ts
│   │   │   │   └── products.module.ts
│   │   │   ├── cart/
│   │   │   │   ├── cart.component.ts
│   │   │   │   ├── cart.service.ts
│   │   │   │   └── cart.module.ts
│   │   │   ├── checkout/
│   │   │   │   ├── checkout.component.ts
│   │   │   │   ├── checkout.service.ts
│   │   │   │   └── checkout.module.ts
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   ├── forgot-password/
│   │   │   │   └── auth.module.ts
│   │   │   ├── profile/
│   │   │   │   ├── profile.component.ts
│   │   │   │   ├── order-history/
│   │   │   │   ├── address-book/
│   │   │   │   ├── wishlist/
│   │   │   │   └── profile.module.ts
│   │   │   └── about/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── i18n/
│   │       ├── en.json
│   │       └── fr.json
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── styles.scss
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Key Components

### Home Component
Landing page with featured products, categories, and promotional banners.

### Product List Component
Displays products with filtering, sorting, and pagination options.

### Product Detail Component
Shows detailed product information with image gallery, reviews, and add-to-cart functionality.

### Cart Component
Shopping cart with item management and checkout button.

### Checkout Component
Multi-step checkout process with shipping and payment information.

### Profile Component
User dashboard with order history, addresses, and settings.

## Routing

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { 
    path: 'checkout', 
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
```

## Services

### Auth Service
Handles user authentication, registration, and token management.

### Product Service
Manages product data retrieval, search, and filtering.

### Cart Service
Handles shopping cart operations (add, remove, update).

### Order Service
Manages order creation and retrieval.

## State Management

Using RxJS BehaviorSubjects for state management:
- Cart state
- User authentication state
- Loading states

## Responsive Design

- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Touch-friendly interface
- Optimized images

## Build

### Development build
```bash
ng build
```

### Production build
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Testing

### Run unit tests
```bash
ng test
```

### Run end-to-end tests
```bash
ng e2e
```

### Code coverage
```bash
ng test --code-coverage
```

## Performance Optimization

- Lazy loading modules
- OnPush change detection strategy
- Image optimization and lazy loading
- AOT compilation
- Bundle size optimization
- Service Worker for PWA

## SEO

- Server-Side Rendering with Angular Universal
- Meta tags management
- Sitemap generation
- Structured data (JSON-LD)

## Internationalization

Supported languages:
- English (en)
- French (fr)

Add translations in `src/assets/i18n/`

## Environment Configuration

### Development
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

### Production
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yoursite.com/api'
};
```

## Deployment

### Deploy to Firebase Hosting
```bash
ng build --configuration production
firebase deploy
```

### Deploy to Netlify
```bash
ng build --configuration production
netlify deploy --prod --dir=dist/cosmetics-user-frontend
```

### Deploy to Vercel
```bash
ng build --configuration production
vercel --prod
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run e2e` - Run e2e tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Aymen Tayari - aymentayari191@gmail.com

Project Link: https://github.com/tayaria/cosmetics-ecommerce-frontend-user

## Related Repositories

- Backend API: [cosmetics-backend](https://github.com/yourusername/cosmetics-backend)
- Admin Frontend: [cosmetics-admin-frontend](https://github.com/yourusername/cosmetics-admin-frontend)
