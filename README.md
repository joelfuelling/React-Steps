# Handling events the React way.

- What is state and why do we need it?

- onSubmit, onMouseEnter, onChange: These are the functions that can be used as a prop to have something happend based on an event. Combining this with the state, we can alter the displayed variables and UI.

# State

- Data that a component can hold over time, necessary for information that it needs to remember throughout the lifecycle.
- "Componnent Memory"
- "State variable" / "piece of state": A single variable in a component (component state)

- Whenever we update state in a component, it re-renders that component/view.

--- State allows us to update a components view (by re-rendering it)
--- State allows local variables to PERSIST BETWEEN RENDERS

- useState() is a "hook" (hook: any react funciton starting with 'use'), which can only be called at the top level of the function component, immediately after declaring it - CANNOT BE CALLED CONDITIONALLY.
- We should ONLY update state with the setState, setData, setDog, etc.,

------DONT SET STATE MANUALLY---- 

- When we try to updte state manually we break React, and create unintended consequences.
- ONLY EVER USE the useState() setter functions provided by React for this specific purpose.

# State Mechanics

- 1 We can't do direct DOM manipulations -> 2 - How is a component view updated then? -> 3 - In React, a view is updated by re-rendering the component (*Very important*) -> 4 - A component is re-rendered when its state is updated -> 5 - So to update a view, we update state. 

- React preservers the component state throughout renders, unless the component disappers from the UI entirely.

# Adding another piece of State.

- Each component has and manages ITS OWN STATE, no matter how many times we render the same component.

const [step, setStep] = useState((s) => s = 1)

- UI(component 1, component 2,...) = aFuncitonOf(state)

# When to use State!

- 1 - Any data that the component should keep track of ("remember") over time. This is data that will change at some point. In Vanilla JS, that's a 'let' variable, or an [] or {}
- 2 - When you want something in the component to be dynamic, create a piece of state related to that "thing", and update the state when "thing" should change (aka "be dynamic")   
    - isOpen = true vs. isOpen = false
- 3 - If you want to change the way a component looks, or the data it displays, update its state. This usually happens in an event handler function.

*** For data that should not triggger component re-renders, don't use state! Use a regular variables instead. This is a COMMON BEGINNER MISTAKE.

# The "Children" prop: Making a resuable button

Children Prop: Each react componnet automatically receives this prop!

- Instead of using two hard coded buttons, we...

1 - Extracted the backgroundColor and Color into their own 'style' variable.
2 - Created a button component that takes 2 props, onClick, and text.
3 - Now, we can define 'handleNext' or 'handlePrevious' for each button by simply changing the onClick function call.
4 - for the actual HTLM button content, we remove the text and emoji from the Component.
    4.1 - To give the button WHATEVER CONTENT IS BETWEEN <Button> and </Button>, we use the 'children prop'.

5 - *See Button Component* 
    - We simply pass in 'children' as a prop down from the Steps component.

export default function Button({onClick, children}) {

    const buttonStyle = {backgroundColor: '#7950f2', color: '#fff'}

    return (
      <button style={buttonStyle} onClick={onClick}>
        {children}
      </button>
    )
  }

  *** What if we want it to display a different message instead? ***