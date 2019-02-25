import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Text from '../component/atom/Text';
import Section from '../component/organism/Section';
import InputTextCalendar from '../component/atom/InputText';
import {connect} from 'react-redux'
import {fetchMutasi} from '../component/action/mutasi'
import {fetchLokasi} from '../component/action/lokasi'
import TableTrx from '../component/organism/TableTrx'
import ListLoc from '../component/organism/ListLoc'
//import LocationList from '../component/organism/LocationList'
const style = theme => ({
    paper: {
        padding: 70,
        margin: 'auto',
        marginTop: '5%',
        maxWidth: 400,
    },
})
class Home extends React.Component {
    constructor(props){
      super(props)
      this.state={
          account:'',
          tglStart:'2019-01-01',
          tglEnd:'2019-01-01',
          jarak:'',
      }
    }
    handleClick = () => {
        this.props.fetchMutasi(this.state.account,this.state.tglStart,this.state.tglEnd)
        //this.props.fetchMutasi('092877123','02-02-2019','09-02-2019')
        
    }
    // handleClickLokasi = () =>{
    //     this.props.fetchLokasi(this.state.jarak)
    // }
    render() {
        return (
            <React.Fragment>
               
               <Grid container 
                  direction="column"
                  justify="center"
                  alignItems="center"
                  >
                  <Grid item>
                    <Text variant = 'title' align = 'left' style={{marginTop:10, marginButtom:10, }}>Temukan Informasi Finansial Anda dan Kantor Bank terdekat disekitar Lokasi Anda.</Text>
                  </Grid>
                  <Grid item>
                      <Section title = 'Mutasi Rekening'>
                      <Grid container direction="column"
                        justify="center"
                        alignItems="center">
                      <Grid item>
                      <Grid container spacing={40} justify="space-between">
                        <Grid item><InputTextCalendar label = 'From' type='date' tipe ='calender' value={this.state.tglStart} onChange={e => this.setState({ tglStart: e.target.value })}></InputTextCalendar></Grid>
                        <Grid item><InputTextCalendar label = 'To' type='date' value={this.state.tglEnd} onChange={e => this.setState({ tglEnd: e.target.value })}></InputTextCalendar></Grid>
                        <Grid item><InputTextCalendar label = 'Account' value={this.state.account} onChange={e => this.setState({ account: e.target.value })}></InputTextCalendar></Grid>
                        <Grid item><Button variant="outlined" color="primary" onClick ={this.handleClick} style={{ cursor: 'pointer',marginTop:'10%',marginBottom:  '20%' }}>Submit</Button></Grid>
                      </Grid>
                      </Grid>
                      <Grid item>
                      {this.props.mutasinya.mutasi.length === 0 ?
                          ""
                          :
                          <TableTrx mutasi={this.props.mutasinya.mutasi} />
                        }
                      </Grid>
                      </Grid>
                     
                      </Section>
                  </Grid>
                  <Grid item>
                      <Grid container spacing={8} justify="flex-start" direction="column">
                          {/* <LocationList></LocationList> */}
                        <Grid item><Section title = 'Kantor Cabang Sekitar Saya'>
                          <Grid container spacing={8}
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item><InputTextCalendar label = 'Jarak' value={this.state.jarak} onChange={e => this.setState({ jarak: e.target.value })}></InputTextCalendar></Grid>
                            <Grid item><Button variant="outlined" color="primary" onClick ={this.handleClickLokasi} style={{ cursor: 'pointer',marginTop:'10%',marginBottom:  '20%' }}>Find</Button></Grid>
                          </Grid>
                          {/* <Grid item>
                            {this.props.mutasinya.lokasi.length === 0 ?
                                ""
                                :
                                <ListLoc mutasi={this.props.lokasinya.lokasi} />
                              }
                            </Grid> */}
                        </Section></Grid>
                        {/* <Grid item><Section title = 'Location : '></Section>
                        </Grid> */}
                        {/* <Grid item><Section title = 'Kurs Hari Ini'>
                          <Grid container spacing={8}
                              direction="row"
                              justify="center"
                              alignItems="flex-start">
                            <Grid item><InputTextCalendar label = 'Dari' ></InputTextCalendar></Grid>
                            <Grid item><InputTextCalendar label = 'Ke' ></InputTextCalendar></Grid>
                            <Grid item><Button variant="outlined" color="primary" style={{ cursor: 'pointer',marginTop:'10%',marginBottom:  '20%' }}>Calculate</Button></Grid>
                          </Grid>
                        </Section></Grid>
                        <Grid item><Section title = 'Hasil : '></Section></Grid> */}
                      </Grid>
                  </Grid>
               </Grid>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = {
  fetchMutasi:fetchMutasi,
  // fetchLokasi:fetchLokasi
}
const mapStateProps=(state)=>{
  return{
      mutasinya:state.mutasi,
      // lokasinya:state.lokasi
  }
}
export default connect(mapStateProps,mapDispatchToProps) (Home);