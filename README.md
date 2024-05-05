
**This is a React component that fetches user data from an API and displays it in a list format. It also provides functionality to load more data and refresh the list.**

## Installation

To use this component, you need to have Node.js and npm installed on your machine. Then, follow these steps:**

**1.

**Clone or download this repository to your local machine.**

**Navigate to the project directory in your terminal.**

**Install the dependencies by running **npm install**.**

**Start the development server by running **npm start**.**

## Component Structure

The **Home** component is structured as follows:**

**

**It uses the **useState** and **useRef** hooks to manage the state and reference of the component.**

**It fetches user data from the **API_URI** using the **axios** library and displays it in a list format.**

**It provides two buttons for loading more data and refreshing the list.**

**It uses the **useLazyLoad** custom hook to handle the lazy loading of data.**

**It uses the **react-toastify** library to display toast messages for loading and refreshing the list.**


## Explanation of the `useLazyLoad` Custom Hook

The **useLazyLoad** custom hook is designed to handle the lazy loading of data based on the user's scrolling behavior. It uses the **useReducer** and **useCallback** hooks from React, along with the **debounce** function from the **lodash** library and the **IntersectionObserver** API.**

**Here's a breakdown of the key components of the **useLazyLoad** custom hook:**

**1.

**reducer**: This is a function that takes the current state and an action as arguments and returns the next state based on the action type. The reducer has two action types: **"set"** and **"onGrabData"**. The **"set"** action updates the loading state, while the **"onGrabData"** action updates the loading state, data, and current page.

**useEffect**: This hook is used to observe the target element (**triggerRef.current**) and trigger the lazy loading of data when the element intersects with the viewport. The **useEffect** hook sets up an **IntersectionObserver** instance that observes the target element and calls the **onIntersect** function when the element intersects with the viewport.

**_handleEntry**: This function is called when the target element intersects with the viewport. It checks if the current page is not loading and the intersection rectangle's bottom is within the threshold distance from the target element's bottom. If both conditions are met, it updates the loading state and fetches the next page of data using the **onGrabData** function.

**handleEntry**: This function is a debounced version of the **_handleEntry** function. It is used to prevent unnecessary API calls when the user scrolls rapidly.

**onIntersect**: This function is called by the **IntersectionObserver** instance when the target element intersects with the viewport. It calls the **handleEntry** function with the first entry object as an argument.

**useCallback**: This hook is used to create a memoized version of the **onIntersect** function that only changes when one of its dependencies (**handleEntry**) changes. This helps to prevent unnecessary re-renders.

**state**: This is the state object that is returned by the **useLazyLoad** custom hook. It contains the loading state, current page, and data array. The state is updated using the **dispatch** function, which is created by the **useReducer** hook.

**By using this custom hook, you can easily implement lazy loading in your React components without having to worry about setting up the **IntersectionObserver** API or managing the loading state and data array.**

## Customization

You can customize the **Home** component by modifying the following properties:**

**

**API_URI**: Change the API URL to fetch data from a different source.

**className**: Change the class names of the component and its elements.

**loading**: Change the loading state message and appearance.

**toast**: Change the toast message and appearance for loading and refreshing the list.
