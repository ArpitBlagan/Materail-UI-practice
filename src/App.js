import { Typography,Button,TextField} from "@mui/material";
import ColorToggleButton from './button';
import Radio from './Radio';
import {Select} from './Select';
import {Box,Paper} from "@mui/material";
import {Card,CardContent,CardMedia,CardActions,Grid} from "@mui/material";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addSong,removeSong } from "./store";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./Image";
const App=()=>{
    const dispatch=useDispatch();
    const handle=()=>{
        console.log("clicked");
        dispatch(removeSong("DuskTillDawn"));
    }
    const val=useSelector((state)=>{return state.songs;});
    useEffect(()=>{
        dispatch(addSong("Perfect"));
        dispatch(addSong("DuskTillDawn"));
    },[]);
    return <div>
    <Navbar/>
    <Grid container spacing={2} sx={{mt:10}}>
    <Grid item xs={4}>
    <Card>
        <CardMedia
            component="img"
            height='140'
            image='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        />
        <CardContent>
            <Typography variant="h3">React & MUI</Typography>
            <Typography variant="h6">Trying to learn mui so i can make the 
                website good looking
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="text">more</Button>
            <Button variant="text">buy</Button>
        </CardActions>
    </Card></Grid>
    <Grid item xs={4}>
    <Card>
        <CardMedia
            component="img"
            height='140'
            image='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        />
        <CardContent>
            <Typography variant="h3">React & MUI</Typography>
            <Typography variant="h6">Trying to learn mui so i can make the 
                website good looking
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="text">more</Button>
            <Button variant="text" onClick={handle}>Delete</Button>
        </CardActions>
    </Card></Grid>
    <Grid item xs={4}>
    <Card>
        <CardMedia
            component="img"
            height='140'
            image='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        />
        <CardContent>
            <Typography variant="h3">React & MUI</Typography>
            <Typography variant="h6">Trying to learn mui so i can make the 
                website good looking
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="text">more</Button>
            <Button variant="text">buy</Button>
        </CardActions>
    </Card></Grid>
    </Grid>
    {val.map((ele,index)=>{
        return <div key={index}>{ele}</div>
    })}
    <Image/>
    </div>
}
export default  App;