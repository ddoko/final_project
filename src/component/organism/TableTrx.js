import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableTrx = ({mutasi}) =>(
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Nomor Rekening</TableCell>
            <TableCell align="right">Tanggal</TableCell>
            <TableCell align="right">Mutasi</TableCell>
            <TableCell align="right">Saldo</TableCell>
            <TableCell align="right">Jenis Transaksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mutasi.map(row => (
            <TableRow key={row.nomor_reff}>
              <TableCell component="th" scope="row">
                {row.nomor_rekening}
              </TableCell>
              <TableCell align="right">{row.tanggal_tran}</TableCell>
              <TableCell align="right">{row.mutasi_kredit}</TableCell>
              <TableCell align="right">{row.saldo_akhir_mutasi}</TableCell>
              <TableCell align="right">{row.posisi_neraca}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
)
export default TableTrx;