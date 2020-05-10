This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-next.3(Angular 10).

This is a simple angular framework with all the must use features and structures. Below are the features of this framework,

  - SCSS
  - Lazy Loading
  - PWA (Progressive Web Applications) enabled
  - Router auth gaurd (canActivate & canDeactivate)
  - Default error routing done for invalid paths
  - HTTP client module
  - HTTP client module interceptor
  - Sample API Implemented
  - Included latest angular meterial
  - Included shared modules

### SCSS

This framework usses [SCSS] for better styles formating and esier syntax.

### Lazy Loading

By using lazy-loading, a module and it's files will be loaded only on demand (i.e) if that route path of the page is visited in the browser. Thus this elimites need of downloading full website files at one. In this framework the folowing is done to demonstrate the lazy loading.

1. This framework has two major pages 'home' and 'jokes'. Home is the initial page that loads. Jokes is the seacondary page that will be loading using lazy loading. Thus initially the page downloads only home contents. After opening jokes page/route only the browser will ask for jokes page files and load. This way the initial load time of the site can be reduced.
2. In **app-routing.module.ts** we must declare components that need to be lazy loaded like below. Thus only when we visit jokes path the module files will be downloaded will be loaded.

        {path:'jokes', loadChildren:'./jokes-component/jokes-component.module#jokesComponentModule'},
    
3. This is it !!! You can add more heirarchy down the road and create efficient application like this.

### PWA (Progressive Web Applications) enabled

This basically uses extensive browser caching methods and keeps the site alive without re-reneding components. This will impact the site performance largely. You can look at what is PWA and how you can test [PWA]. 

### Router auth gaurd (canActivate & canDeactivate)

For security many application will require the auth gaurds. We can test the vailidity of the URL or token whenever there is a change in route.

    {path: '', component: JokesComponent, canActivate: [AuthGaurdService], canDeactivate: [AuthGaurdService]},

The [AuthGaurdService] is a injectable service where the code for canavtivate and canDeactivate is written.

### Default error routing done for invalid paths

In routers if any invalid route is given. The page will redirect to 404. This is a simple redirection using which we can show creative page for 404.

### HTTP client module

A HTTP client module is must for latest versions of angular. The HTTP client module is used in the framework for handling HTTP requests. [About HTTP client module]

### HTTP client module interceptor

**app-http.interceptor** is a interceptor for HTTP client module. Tis intercector is like a middleware, we can perform common activities like showing / hiding loading icon before and after HTTP requests. [Check here for mpre on interceptors]

This interceptor is added in the app modules.

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
    ],

### Sample API Implemented

A sample API has been added. This api is called in jokes component. The service file name is **[jokes.service.ts]**.

### Included latest angular meterial

The site is designed with angular material. The buttons, listing, etc.. are done using latest angular material [9.2.0-next.0]. This will give a clean look.

### Included shared modules

Most of the time in any given application you will have to use common components like Headers, Loading, etc. These remail common accross all modules. Thus here a shared module is created and imported in the modules that require it. The file name is **[app.shared.module.ts]**.






## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you need any help in code understanding or I missed any important concept in angular framework. Send it accross to [visheshvvvm@gmail.com]


[SCSS]: https://sass-lang.com/documentation/syntax

[visheshvvvm@gmail.com]: visheshvvvm@gmail.com

[PWA]: https://dzone.com/articles/developing-pwa-using-angular-7

[AuthGaurdService]: https://github.com/vishesh1king/angular7-framework-latest/blob/master/src/app/core/gaurds/auth-gaurd.service.ts

[About HTTP client module]: https://angular.io/api/common/http/HttpClientModule

[Check here for mpre on interceptors]: https://angular.io/api/common/http/HttpInterceptor

[jokes.service.ts]: https://github.com/vishesh1king/angular7-framework-latest/blob/master/src/app/services/jokes/jokes.service.ts

[9.2.0-next.0]: https://material.angular.io/

[app.shared.module.ts]: https://github.com/vishesh1king/angular7-framework-latest/blob/master/src/app/shared/app.shared.module.ts