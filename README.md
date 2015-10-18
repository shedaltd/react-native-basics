# Setup (IOS)
* Install Xcode
* Install NVM
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`
* Install Node
`nvm install node && nvm alias default node`
* Install Watchman
`brew install watchman`
* Install flow
`brew install flow`
* Install the *react-native* cli
`npm install -g react-native-cli`
* Init a new project
`react-native init AwesomeProject`

# Benefits
## Declaritive
## Virtual DOM
* Diff the DOM
* Declaritive => Productive => Reliable

## Benefits of React Native
* Live Update
* Relearn native apis to achieve the same goal
* Imperative APIS are standard
* The web is second class citizen in the mobile world
* Web views suck
* User Experience vs Developer Velocity
* Not write once run anywhere
* Learn once write anywhere

#Building an application
##Introduction to ReactJS
* Just the UI
* Virtual DOM
* Dataflow

## Building A simple Component
Hello World in React-Native

* render

###React-Native Workflow
* Hot Reloading
* Chrome-Debugger
* React Tools

## Building A stateful Component
Adding random TODO's to our list

* initialState
* setState


## Passing Props to Children
Abstracting our logic of our listen and button into seperate components building an input for a todo

* propTypes

## Thinking Reactive
Preferencing props over state, when to use state and when not to, our UI is a representation of our data and nothing more

## Building a simple application
Who to follow on github in React-Native

## API Requests and Real Data [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)

# Styling CSS in JavaScript with React-Native
Adding simple styles to our button list and title tags and making them layout in a nicer way

##Problems With CSS
* Global Namespace
* Dependencies
* Dead Code Elimination
* Minification
* Sharing Constants
* Non-Deterministic Resolution
* Isolation
* CSS In JS solves all fo these issues

## Reference
* [Style](https://facebook.github.io/react-native/docs/style.html)
* [View](https://facebook.github.io/react-native/docs/view.html)
* [Image](https://facebook.github.io/react-native/docs/image.html)
* [Text](https://facebook.github.io/react-native/docs/text.html)
* [Flexbox](https://facebook.github.io/react-native/docs/flexbox.html)
    * [A Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Transforms](https://facebook.github.io/react-native/docs/transforms.html)

# Best Practice application architecture with Flux + Redux
Adding flux to our application and the benefits it provides

##[Flux](https://github.com/facebook/flux)
[Flux Diagram](https://raw.githubusercontent.com/facebook/flux/master/docs/img/flux-diagram-white-background.png)
### Action Creators
* Has methods which are called in our application
    * Methods are called in response to user interaction
* Creates Payloads which usually consist of an intent/'action name', "CREATE_TODO" and {title: "My Favorite Todo", completed: false, description: "I need to do this"}

### Dispatcher
* Recieves incomming actions from action creators
* Dispatches all actions to registered stores

### Store
* Registers callbacks with the dispatcher to recieve incoming Actions {action: 'SOME_ACTION', data: 'SOME_DATA'}
* Mutates its state based on these actions
* Emits change to all listeners (Traditional Publisher Subscriber)

### View
* Registeres with relevent stores to listen for changes
* Updates its view in response to the change of state
* Calls Action Dispatchers in response to user action

## Fluxifying our application with Redux
Extracting our todos into actions and stores

###[Redux](http://rackt.org/redux/)
* Installing a library into our application using NPM
* Requiring it as a depedency
* Using Redux

### API Layer

### API Utils


