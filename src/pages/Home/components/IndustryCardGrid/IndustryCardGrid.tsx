
import React from 'react';
import IndustryCard from "../IndustryCard/IndustryCard.tsx";
import './IndustryCardGrid.scss';

function IndustryCardGrid() {
    return (
        <div className="card-grid">
            <div className="container">
                <IndustryCard imgSrc="https://picsum.photos/200" title="Hello No. 1" description="A sample of hellos from around the world."/>
                <IndustryCard imgSrc="https://picsum.photos/200" title="Hello No. 2" description="How to say hello in animal languages."/>
                <IndustryCard imgSrc="https://picsum.photos/200" title="Hello No. 3" description="About the deep emotional challenges of saying hello."/>
            </div>
        </div>
    );
  }
  
  export default IndustryCardGrid;