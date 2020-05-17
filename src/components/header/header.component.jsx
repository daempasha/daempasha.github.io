import React from 'react';
import './header.styles.scss';
import {Events, scrollSpy, Link} from 'react-scroll';


class Header extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
       
          scrollSpy.update();    
    }

    componentWillUnmount(){
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }


    render(){
        return (
            <div className='header'>
                <div className="flex">
                    <h1 className='title'>DAEM</h1>
                    <ul>
                        <li><Link to="aboutme" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                        <li><Link to="work" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Work</Link></li>
                        <li><Link to="education" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Education</Link></li>
                        <li><Link to="projects" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li><Link to="cv" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Cv</Link></li>
                        <li><Link to="contactus" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Contact us</Link></li>
                    </ul>
                </div>
            </div>

        );
    }

};

export default Header;