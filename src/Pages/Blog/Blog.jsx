import React from 'react';
import UseTittle from '../../utils/UseTittle';

const Blog = () => {
    UseTittle('Blog')                               
    return (
       <>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application? </h2>
                    <p>React state management is basically half of a React app. It includes all the data. The other half is the presentation including the HTML, CSS, and formatting. State and state management is relied on by presentation part of the app. The only time a React app will re-rendered is when state changes.
                        We just published a full intermediate course on the freeCodeCamp.org YouTube channel that will teach you all about React State Management.
                        Jack Herrington created this course. He is a principal full stack engineer and popular course creator.  </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work? </h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests? </h2>
                    <p>Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue? </h2>
                    <p>A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers</p>
                </div>
            </div>
       </>
    );
};

export default Blog;