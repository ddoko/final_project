import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
const ListLoc = ({lokasi}) =>(
    <Card>
        <CardContent>
        {lokasi.map((lokasi,index)=>{
            var a = index+1
            return(
                <div key = {lokasi.id}>
                    <Typography>{lokasi.unit_kerja}</Typography>
                    <Typography>{lokasi.alamat}</Typography>
                </div>
            )
        })}
        </CardContent>
    </Card>
)

export default ListLoc
