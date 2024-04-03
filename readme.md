# CDP Batch 7 By Spring Rain

## Class 1
- HTML
- CSS
- Git

## Class 2
- JavaScript

## Class 3
- JavaScript
- Hoisted up of JS
- Array of JS
- - Push , Pop, Shift, Unshift 
- Deep copy and shallow copy
- Spread operator
- Slice and Splice
- Filter
- Doule equal and triple equal
- Reduce - sum of array
- foreach with array
- map with array
- DOM
- BOM
- - Window.location
- - Window.history
- - Window.navigator
- - Window.screen
-  browser local storage
-  browser session storage

## Class 4

- Callback
- Promise
- Async and Await
- Fetch API
- JSON
- Worker with JS

### Assignment
By clicking a button the worker will fetch data from jsonplaceholder and show the table data in the browser.
Use async and await , worker , callback.

## Class 5

- Folder structure
- GitHub Commit should be meaningful
- Git flow(Basically a framework for managing your branches)
- Clickup (Project management tool)
- Generative AI
- ZZZCODE.ai (Code generation tool)
- Github AUCorp(Github Account)
- Microservices vs Monolithic (Architecture)
- microservices.io ( A website for microservices)
- Serverless(Will be discussed in the next class)

## Class 6
### SDLC
The SDLC contains
```mermaid
graph LR
A[Planning] --> B[Defining]
B --> C[Designing]
C --> D[Building]
D --> E[Testing]
E --> F[Deployment]
```

Different types of SDLC
- Waterfall
- Agile
- Spiral

https://www.atlassian.com/agile
#### Agile
Client is always involved in the development process. It is a continuous process. It is a flexible process. It is a fast process. It is a cost-effective process.

Agile has four main point

- Individuals and interactions over processes and tools ( Discuss about what you did and what you are going to do and who is blocked for you)
- Working software over comprehensive documentation ( MVP first then add more features)
- Customer collaboration over contract negotiation
- Responding to change over following a plan

#### Sprint or Scrum
- Story point
- Overestimation

#### Kanban
- Always ready for new work

#### Iterative
- More like sprint
- Here work can be moved from one sprint to another sprint

### DevOps

It supports agile proces. It is a combination of development and operation.

- A CI/CD pipeline is maintained in DevOps.
- Integration works with sonarqube , unit test, code coverage, etc.

### Retrospective
Retrospective meeting disucss about what went wrong and what went right , what could be better . Retro meeting is done after every sprint.

### Six Sigma
- DMAIC (Define, Measure, Analyze, Improve, Control)
- DMADV (Define, Measure, Analyze, Design, Verify)

### Design Pattern

Refactoring Guru

- Creational
    - Factory Pattern
    - Singleton Pattern (Database connection)
- Structural
    - Adapter Pattern
- Behavioral
    - Chain of Responsibility

### DDD
#### An example of DDD
- Described an decomposed an real life application along with a discussion of why microservices are used.

- Circuit Breaker Pattern

### Pros and Cons of JS
- Functional Programming
- No strict type


## Class 7
- NODE
   - runtime environment
- NVM
- imperative vs declarative
    - imperative programming repeats code
    - declarative programming more like a function
- VDOM
    - copies the real DOM
    - compares the real DOM with the VDOM
    - updates the real DOM
    - only updates the part of the real DOM
- React compares in reconciliation
    - React will compare the VDOM with the real DOM
    - React will update the real DOM
    - React will only update the part of the real DOM
- CSSOM
    - CSS Object Model
- merging CSSOM and browser DOM is slow
```mermaid
graph LR
A[Browser DOM] -->|fast| B[Merging]
C[CSSOM] -->|Slow| B
B -->|Slow| D[UI]
```

- Why react?
    - Declarative
    - Reusable
    - One Way data flow / One Way binding
    - updates in batch
    - Effcient update of the DOM
- Why react is bad for SEO?
- Vite provides a faster development environment throught hot reload
- React Project Initialization With Vite
- Advantages of Component 
    - Fundamental building block
    - Reusability
    - Modularity
- Folder Structure of Boilerplate
- Details of JSX
    - Every tag must be closed or self-closed
    - Will return only one parent element
    - JSX transpiled to js(babel)
    - Class is replaced by className
    - Wrap js wi th {}
    - Is a syntax extension of JS

- Functional Component
- Class Component
    - State Management
    - Constructor
    - Render
    - Bind method

- State is Immutable
- Immer.js
## Class 8 
- LifeCycle Method
    - ComponentDidMount()
        - Called after the component is mounted for the first time
        - Making Network Request / api call / interect with DOM
    - shouldComponentUpdate()
        - return boolean Value(true/false)
        - called before rendering
        - unnecessary rendering can be avoided
        - optimization in performance
    - componentDidUpdate()
        - Called after the component is updated
    - componentWillUnmount()
        - Called before the component is removed from the DOM


## Class 14
### Class Work
Process
- Version 
- platform
- cpu usage

OS Module
- Cpu details
- Usage

FS Module
- file write

### Class topic
- Why Koa.js?
- Server using Koa.js
- Middleware

## Class 15
- https://www.w3resource.com/node.js/nodejs-programming-model.php
- Work with modules by making small functions
- HTTPS status code
- validator js
- JWT Token



