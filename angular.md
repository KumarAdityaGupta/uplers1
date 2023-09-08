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