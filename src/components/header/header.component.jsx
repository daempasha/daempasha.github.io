import React from 'react';
import './header.styles.scss';
import {Events, scrollSpy, Link} from 'react-scroll';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSticky : false
        }
    }
    

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
       
        scrollSpy.update();    
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleScroll = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            this.setState({
                isSticky: true
            })
        } else {
            this.setState({
                isSticky: false
            })
        }

    }

    render(){
        const stickyHeader = <div className='header sticky'>
            <div className="flex">
                <Link to="aboutme" spy={true} smooth={true} offset={50} duration={500}><h1 className='title'>DAEM</h1></Link>
                <ul>
                    <li><Link to="aboutme" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                    <li><Link to="work" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Work</Link></li>
                    <li><Link to="education" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Education</Link></li>
                    <li><Link to="projects" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                    <li><Link to="contactus" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Contact us</Link></li>
                </ul>
            </div>
        </div>
        const header = <div className='header'>
        <div className="flex">
            <h1 className='title'>DAEM</h1>
            <ul>
                <li><Link to="aboutme" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                <li><Link to="work" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Work</Link></li>
                <li><Link to="education" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Education</Link></li>
                <li><Link to="projects" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                <li><Link to="contactus" activeClass='active-link' spy={true} smooth={true} offset={50} duration={500}>Contact us</Link></li>
            </ul>
        </div>
    </div>
        return (
            <div>
                {this.state.isSticky ? stickyHeader : header}
            </div>

        );
    }

};

export default Header;