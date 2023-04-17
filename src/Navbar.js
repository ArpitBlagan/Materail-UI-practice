import { AppBar,Toolbar, Typography,Stack, Button } from "@mui/material";
//sx={{flexGrow:1}} helps in arrangment
//of the logo and Stack in typography
function Navbar(){
    return <AppBar gutterBottom="30px" sx={{backgroundColor:"black"}}>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{flexGrow:1}}>
                Hey this is Arpit Company
            </Typography>
            <Stack direction="row">
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Carrer</Button>
            </Stack>
        </Toolbar>
    </AppBar>
}
export default Navbar;