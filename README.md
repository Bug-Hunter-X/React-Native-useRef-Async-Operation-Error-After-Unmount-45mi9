# React Native useRef Async Operation Error After Unmount

This repository demonstrates a common error in React Native when using the `useRef` hook with asynchronous operations.  The problem occurs when the component unmounts before the asynchronous operation completes, leading to an error trying to access the ref's `current` property.

## Problem

The `bug.js` file contains a component that fetches data asynchronously using `fetch`.  The fetched data is then used to update the state using `myRef.current.setState()`. If the component unmounts before the `fetch` call completes, `myRef.current` will be `undefined`, resulting in a runtime error.

## Solution

The `bugSolution.js` file demonstrates a solution using the `useEffect` hook's cleanup function to cancel the asynchronous operation if the component is unmounted before completion.  This prevents the error by ensuring that the ref is only accessed if the component is still mounted.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
5. Observe the error in the console when the component unmounts before the async operation is finished.