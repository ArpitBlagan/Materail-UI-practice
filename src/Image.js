import { Stack,ImageList,ImageListItem, ImageListItemBar } from "@mui/material";

function Image(){
    return <Stack spacing={4}>
        <ImageList
            sx={{width:500,height:450}}
            cols={3}
            rowHeight={164}
        >
            {itemData.map((ele,index)=>{
                return <ImageListItem key={index}>
                    <img
                        src={ele.img}
                        alt={ele.title}
                        loading="lazy"
                        style={{height:164}}
                    >
                    </img>
                    <ImageListItemBar title={ele.title}/>
                </ImageListItem>
            })}
        </ImageList>
    </Stack>
}
export default Image;
const itemData=[
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    },
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    },
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    },
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    },
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    },
    {
        img:'https://images.unsplash.com/photo-1681650575835-22c095546edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title:'Cool'
    }
]