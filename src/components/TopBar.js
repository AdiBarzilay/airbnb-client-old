import React, { Component } from 'react';
import NavWeb from './TopBarWeb';
import {Container, Header, Button, Logo,LogoWeb, Arrow, Search, Input, HeaderBottomLine, Wrap, Manu, MenuItem, ItemLink, ItemIcon, Line, Icon} from './TopBar.styles';
import {
    withRouter
  } from 'react-router-dom';

class TopBar extends Component {

    state = {
        menu_opened: false,
        // pos:'sticky',
        path : '/'
    } 

    toggle_menu = ()=>{
        // const viewport_width = window.innerWidth;
        // console.log('innerWidth: ' + viewport_width);
        
        this.setState({menu_opened:!this.state.menu_opened})
      
        // this.props.update_body({over:'fixed'})
        this.props.update_body(this.props.over === 'hidden' ? 'visible' : 'hidden')
        this.props.update_body_posi(this.props.posi === 'fixed' ? 'relative' : 'fixed')
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                        menu_opened: false,
                    })
            this.props.update_body(this.props.over === 'visible')
            this.props.update_body_posi(this.props.posi === 'relative')
            
            this.onRouteChanged();
        }
      }
    
      onRouteChanged() {
        
        console.log("ROUTE CHANGED");
      }
   
    render(){
        // console.log('overflow data',this.props.over)
        // console.log('render top match',this.props.match)
        // console.log('TopBar position',this.props.pos)

        return (
            <Container pos={this.props.pos} >
                <Header {...this.props}>
                    <Button onClick={this.toggle_menu} >
                        <Logo src='images/logo.svg'/>
                        <Arrow src='/images/icons/arrow.png'/>
                    </Button>
                    <ItemLink to="/">
                        <LogoWeb src='images/logo.svg'/>
                    </ItemLink>
                    <Search>
                        <Input type="text" placeholder='Try "Seoul"'/>
                    </Search>
                    <NavWeb/>
                </Header>

                <HeaderBottomLine open={this.state.menu_opened}/>

                <Wrap open={this.state.menu_opened}>
                    <Manu>
                        <MenuItem>
                            <ItemLink to="/">Home</ItemLink>
                        </MenuItem>
                        <li><Line/></li>
                        <MenuItem>
                            <ItemLink to="/P">Profile</ItemLink>
                            <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/T">Trips</ItemLink>
                            <ItemIcon><Icon src='images/icons/trips.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/M">Messages</ItemLink>
                            <ItemIcon><Icon src='images/icons/messages.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/W">Wish lists</ItemLink>
                            <ItemIcon><Icon src='images/icons/heart.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/">Invite friends</ItemLink>
                            <ItemIcon><Icon src='images/icons/gift.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/">Refer hosts</ItemLink>
                            <ItemIcon><Icon src='images/icons/gift.svg'/></ItemIcon>
                        </MenuItem>
                        <li><Line/></li>
                        {/* <MenuItem>
                            <ItemLink to="/download">Download the App</ItemLink>
                            <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon>
                        </MenuItem> */}
                        <MenuItem>
                            <ItemLink to="/work">Airbnb for work</ItemLink>
                            <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon>
                        </MenuItem>
                        <li><Line/></li>
                        <MenuItem>
                            <ItemLink to="/download-the-App">List your place
                            <span>Earn up to <b>₪5,701 a month</b></span></ItemLink>
                            <ItemIcon><Icon src='images/icons/place.svg'/></ItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/host">Host an experience</ItemLink>
                            {/* <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon> */}
                        </MenuItem>
                        <li><Line/></li>
                        <MenuItem>
                            <ItemLink to="/help">Help</ItemLink>
                            {/* <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon> */}
                        </MenuItem>
                        <MenuItem>
                            <ItemLink to="/logout">Log out</ItemLink>
                            {/* <ItemIcon><Icon src='images/icons/profile.svg'/></ItemIcon> */}
                        </MenuItem>
                    </Manu>
                </Wrap>
            </Container>
         )
        }
}

export default withRouter(TopBar)
