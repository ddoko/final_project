import React from 'react'
import Grid from '@material-ui/core/Grid'
import Section from '../organism/Section';
import InputTextCalendar from '../atom/InputText';
import Button from '@material-ui/core/Button';
import {fetchLokasi} from '../action/lokasi'
import {connect} from 'react-redux'
import ListLoc from '../organism/ListLoc'
class LocationList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            jarak:'',
        }
    }
    handleClickLokasi = () =>{
        this.props.fetchLokasi(this.state.jarak)
    }
    render() {
        return (
            <React.Fragment>
                <Grid item><Section title = 'Kantor Cabang Sekitar Saya'>
                    <Grid container spacing={8}
                        direction="row"
                        justify="center"
                        alignItems="center">
                    <Grid item><InputTextCalendar label = 'Jarak' value={this.state.jarak} onChange={e => this.setState({ jarak: e.target.value })}></InputTextCalendar></Grid>
                    <Grid item><Button variant="outlined" color="primary" onClick ={this.handleClickLokasi} style={{ cursor: 'pointer',marginTop:'10%',marginBottom:  '20%' }}>Find</Button></Grid>
                    </Grid>
                    <Grid item>
                    {this.props.mutasinya.lokasi.length === 0 ?
                        ""
                        :
                        <ListLoc mutasi={this.props.lokasinya.lokasi} />
                    }
                    </Grid>
                </Section>
                </Grid>
            </React.Fragment>
    )}
}
const mapDispatchToProps = {
        fetchLokasi:fetchLokasi
  }
const mapStateProps=(state)=>{
    return{
        lokasinya:state.lokasi,
    }
  }
export default connect(mapStateProps,mapDispatchToProps) (LocationList)
