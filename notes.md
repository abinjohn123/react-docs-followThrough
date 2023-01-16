## Interactivity

- Data that changes over time is called _state_
  - components need to remember current data so that it knows when there is an update
- State can be added to any component and updated as needed
- Hooks are special functions that lets components use specific react features

## State

Problem with using local variables to manage state -

1. Local variables don’t persist between renders. When React renders a component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

Hooks can only be used at the top-level of components or own hooks. They can't be used inside conditions, loops, or other nested functions. -> They shouldn't be called conditionally
**You “use” React features at the top of your component similar to how you “import” modules at the top of your file**

Read: https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e

-A state variable is only necessary to keep information between re-renders of a component. Within a single event handler, a regular variable will do fine. Don’t introduce state variables when a regular variable works well.

## Render & Commit

Three steps to rendering items on the DOM

1. Trigger a render - the initial render, and when a 'state' changes
2. Render the components - rendering == calling the components whose state changed
3. Commit changes to the DOM - identify what changed since the previous render and make those updates to the DOM
