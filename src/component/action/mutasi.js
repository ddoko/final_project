import axios from 'axios'

export const fetchMutasi = (from,to,account)=>{
    console.log('id lemparan :',from)
    return (dispatch)=>{
        axios.get('https://private-anon-17232bf5ae-briapi.apiary-mock.com/v1/api/statement/'+account+'/'+from+'/'+to)
        .then(response=>{
            console.log(response)
            const mutasi_baru= response.data.data.map(
                (item)=>{
                    return {
                        nomor_rekening : item.nomor_rekening,
                        tanggal_tran : item.tanggal_tran,
                        mutasi_kredit : item.mutasi_kredit,
                        saldo_akhir_mutasi:item.saldo_akhir_mutasi,
                        nomor_reff:item.nomor_reff,
                        posisi_neraca:item.posisi_neraca
                    }
                }
            )
            dispatch(updateMembers(mutasi_baru))
        }).catch(error =>{
            console.log('error')
            }   
        )
    }
}

export const updateMembers = (mutasi = []) => {
    return {
        type: 'UPDATE_MUTASI',
        payload : {
            mutasi:mutasi
        }
    }
}