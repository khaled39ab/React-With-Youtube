import React from 'react';
import AboutReact from './../class/AboutReact';
import VirtualDom from './../class/VirtualDom';
import Prerequisites from './../class/Prerequisites';
import Jsx from './../class/Jsx';
import Component from './../class/Component';
import State from './../class/State';
import EventHandling from './../class/EventHandling';
import Rendering from './../class/Rendering';
import ClassComponent from './../reactComponent/ClassComponent';
import ForceUpdate from './../reactComponent/ForceUpdate';
import Hooks from '../class/Hooks';
import NestedMapping from '../components/NestedMapping';
import ReactMemo from '../class/ReactMemo';

const Class = () => {
    return (
        <div>
            <AboutReact />
            <VirtualDom />
            <Prerequisites />
            <Jsx />
            <Component />
            <State />
            <EventHandling />
            <Rendering />
            <ClassComponent />
            <ForceUpdate />
            <Hooks></Hooks>
            <NestedMapping></NestedMapping>
            <ReactMemo />
        </div>
    );
};

export default Class;