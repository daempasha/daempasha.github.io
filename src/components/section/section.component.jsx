import React from 'react';
import './section.styles.scss';
const Section = (props) => (
    <div style = {{
        backgroundColor: props.backgroundColour,
        padding: `${props.padding.y} ${props.padding.x}`
    }}>
        {props.title ? <h2 className='section-header'>{props.title}</h2> : null}<div>
            {props.children}
        </div>
    </div>


);

export default Section;