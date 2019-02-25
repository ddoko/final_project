import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Business from '@material-ui/icons/Business'
import Button from '@material-ui/core/Button';
class NavbarMenu extends React.Component {
    render() {
      return (
        <Button
          color="inherit"
          {...this.props}
        />
      )
    }
}
const NavBar = () => {
    return (
        <div>
            <AppBar position='static' color='inherit'>
                <Toolbar>
                  <Grid container alignItems='center' justify='space-between'>
                    <Grid item>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Business />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" color="inherit" >Butuh Duid App</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* <Grid item>
                      <Grid container spacing={4} alignItems="flex-end">
                        <Grid item>
                          <PermIdentity />
                        </Grid>
                        <Grid item>
                          <NavbarMenu>Logout</NavbarMenu>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Toolbar>
               </AppBar>
        </div>
    );
};

export default NavBar;