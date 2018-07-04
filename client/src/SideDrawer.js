import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

class SideDrawer extends React.Component {
    
    render() {
        return(
           <div>
           <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
           <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
           <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
           <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
           <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
             <div
               tabIndex={0}
               role="button"
               onClick={this.toggleDrawer('left', false)}
               onKeyDown={this.toggleDrawer('left', false)}
             >
               {sideList}
             </div>
           </Drawer>
           <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
             <div
               tabIndex={0}
               role="button"
               onClick={this.toggleDrawer('top', false)}
               onKeyDown={this.toggleDrawer('top', false)}
             >
               {fullList}
             </div>
           </Drawer>
           <Drawer
             anchor="bottom"
             open={this.state.bottom}
             onClose={this.toggleDrawer('bottom', false)}
           >
             <div
               tabIndex={0}
               role="button"
               onClick={this.toggleDrawer('bottom', false)}
               onKeyDown={this.toggleDrawer('bottom', false)}
             >
               {fullList}
             </div>
           </Drawer>
           <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
             <div
               tabIndex={0}
               role="button"
               onClick={this.toggleDrawer('right', false)}
               onKeyDown={this.toggleDrawer('right', false)}
             >
               {sideList}
            
             </div>
        </Drawer>
      </div> 

        );
    }
}

export default SideDrawer