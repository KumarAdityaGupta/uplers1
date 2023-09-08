## What is an Angular directive, and how do you create a custom directive?

a directive is a special instruction in the DOM (Document Object Model) that tells the Angular framework to do something to a DOM element or component. Directives are a fundamental building block of Angular applications and allow you to extend HTML with custom behavior and functionality.

There are three types of directives in Angular:

1. **Component Directives**: These are the most common type of directive in Angular and are used to create custom components. Components are directives with templates and encapsulated styles.

2. **Attribute Directives**: Attribute directives change the appearance or behavior of a DOM element. They are typically used as HTML attributes applied to DOM elements to modify their behavior or appearance. Examples include ngIf, ngFor, and custom attribute directives.

3. **Structural Directives**: Structural directives modify the DOM structure by adding or removing elements from the DOM. Examples include *ngIf, *ngFor, and custom structural directives.


Example to design simple directive

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

To use your custom directive in HTML, you simply apply it as an attribute to the desired element. For example:

```
<div appCustomDirective>
  This div has a custom directive applied.
</div>

```

You need to add your custom directive to an Angular module. Open the module file (e.g., app.module.ts) and import your directive class. Then, add it to the declarations array of the @NgModule decorator.


```
import { NgModule } from '@angular/core';
import { CustomDirective } from './path-to-custom-directive';

@NgModule({
  declarations: [CustomDirective],
  // ...
})
export class AppModule { }

```


---

## How can you pass data between parent and child components in Angular?

you can pass data between parent and child components using several techniques. The choice of which method to use depends on your application's architecture and specific use case. Here are some common methods to achieve data communication between parent and child components:

### Input Properties (Parent to Child):

Parent Component: You can pass data from the parent component to the child component by binding a property of the child component with an input property decorator (@Input).
Child Component: In the child component, declare an input property using the @Input decorator and then use that property in the child component's template.

Example:
```
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-parent',
        template: '<app-child [data]="parentData"></app-child>'
    })
    export class ParentComponent {
        parentData = 'Data from parent';
    }

```

Child Component

```
    import { Component, Input } from '@angular/core';

    @Component({
        selector: 'app-child',
        template: '<p>{{ data }}</p>'
    })
    export class ChildComponent {
        @Input() data: string;
    }

```

---------

## What are Angular guards, and how do they work?

Angular guards are a set of interfaces that you can implement to add protection and control over the routing navigation in an Angular application. Guards are used to control whether a user is allowed to navigate to or away from a specific route.

There are four types of Angular route guards:

1. **CanActivate**: This guard is used to determine if a user is allowed to access a particular route. It's commonly used for authentication and authorization purposes. it return a boolean value.
2. **CanActivateChild**: Similar to CanActivate, this guard is used to control access to child routes when a parent route is activated. It can be used to protect certain sections of a parent route's children.
3. **CanDeactivate**: This guard is used to determine if a user is allowed to leave a route, typically when navigating away from a form with unsaved changes.It checks if a component can be deactivated without data loss.
4. **Resolve**: it is used to fetch data before a route is activated. It's typically used to prefetch data needed by a component and ensure that data is available before the route is activated.


--------------------


## Explain the concept of Angular services and dependency injection.

** Angular Services:** 
A service in Angular is a class that encapsulates a specific piece of functionality and can be shared across different parts of an application. Services are used to abstract common tasks or data manipulation, such as data retrieval from an API, logging, authentication, or any other business logic. They help in keeping components lean and focused on their primary responsibilities.

Key characteristics of Angular services:

- **Singleton**: By default, Angular services are singletons. This means that Angular creates a single instance of a service, and that instance is shared across the entire application. When a component or another service injects a dependency of a service, they receive the same instance.

- **Separation of Concerns**: Services help separate business logic and data access from user interface logic (components). This separation makes the codebase more maintainable and testable.

- **Reusability**: Services are designed to be reusable. You can use the same service in multiple components, promoting code reuse and reducing duplication.

- **Dependency Injection**: Services are typically injected into components or other services using Angular's dependency injection system.

**Dependency Injection (DI):**

Dependency Injection is a design pattern and a core concept in Angular. It is a way to provide dependencies (services or other objects) to a class instead of the class creating its own dependencies. Angular's DI system takes care of providing these dependencies.

Key points about Dependency Injection in Angular:

- **Injection Token**: To inject a service or a dependency into a class (component, another service, etc.), you use an injection token. This token serves as a key that maps to the actual implementation of the service.

- **Providers**: Providers are responsible for creating instances of services and making them available for injection. You specify providers in your application's configuration, such as in the @NgModule decorator.

- **Hierarchical Injector**: Angular's DI system is hierarchical. There is a root injector at the application level, and each component has its own injector that is a child of the root injector. This hierarchy allows for different instances of services to be scoped to different parts of the application.