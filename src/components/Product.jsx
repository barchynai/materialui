import { useState } from "react"
import  Card  from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { TextField } from "@mui/material"


function Product({data, setTocart}){
    const {image, title, description, price} = data
    const [quantity, setQuantity] =useState(0)
    return(<> 
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img"
        height='140'
        image={image}
        alt="green iguana"/>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="h5" color="text.primery">
        ${price}
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={4}><Button variant="contained" onClick={() => setQuantity(perv => perv + 1)}>One More</Button></Grid>
        <Grid item xs={4}><TextField disabled value={quantity}/></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={()=> setQuantity(prev => prev - 1)}>Minus One</Button></Grid>
        </Grid>
        <Button fullWidth onClick={() => setTocart(prev => [...prev, {title: title, price: price, quantity: quantity}])}>Add to card</Button>
        </Card>
        </>
    )
}
export default Product