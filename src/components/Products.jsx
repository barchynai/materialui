import Product from "./Product"
import { Grid } from "@mui/material"

function Products({data, setTocart}){
    return(<><h1>Products</h1>
    <Grid container>
    {data.map((pr) =>{
            return (<Grid item sx={6}><Product data={pr} key={pr.id} setTocart={setTocart}/></Grid>)
        })}
    </Grid>
    </>)
}
export default Products