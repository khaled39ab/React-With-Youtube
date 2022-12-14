import React from 'react';
import handlingEvent from './../images/HandlingEvent.PNG'
import handlingEvent2 from './../images/HandlingEvent2.PNG'
import handlingEvent3 from './../images/HandlingEvent3.PNG'

const EventHandling = () => {
    const handleEvent = () => {
        alert('Button Clicked')
    }
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>Handling Events</h1>
            <p>
                Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
                <ul>
                    <li>React events are named using camelCase, rather than lowercase.</li>
                    <li>With JSX you pass a function as the event handler, rather than a string.</li>

                    <button style={{ 'border': '2px solid rose', 'backgroundColor': '#728FCE', 'padding': '5px' }} onClick={handleEvent}>Click Me</button>

                    <li>Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, we can write: <br />
                        <img src={handlingEvent} alt="" />
                        <br />
                        In React, this could instead be: <br />
                        <img src={handlingEvent2} alt="" />
                    </li>
                </ul>
            </p>

            <h3>Handling Event in class component</h3>
            <p>
                When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:
                Example: <br />

                <img src={handlingEvent3} alt="" />
            </p>

            <h2>Passing Arguments to Event Handlers</h2>
            <p>
                Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:
                Example: (example are comment mood)
                {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
                <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}

                The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.

                In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
            </p>

        </div>
    );
};

export default EventHandling;