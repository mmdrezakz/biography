import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
const teamData = [
  { id: 1, name: "محمد", trait: "خلاقیت", energy: "بالا" },
  { id: 2, name: "رضا", trait: "مسئولیت‌پذیری", energy: "متوسط" },
  { id: 3, name: "سارا", trait: "روحیه تیمی", energy: "خیلی بالا" },
  { id: 4, name: "علی", trait: "دقت و جزئی‌نگری", energy: "بالا" },
  { id: 5, name: "نگار", trait: "انگیزه یادگیری", energy: "متوسط" },
];
export default function Jadval() {
  return (
                  <TableContainer  component={Paper} sx={{ maxWidth: 400, margin: "auto", mt: 4, mb: 1, }}>
      <Typography className="bg-gray-400"fontFamily={"Vazirmatn"}  variant="h6" align="center" sx={{ p: 2 }}>
        جدول خصوصیات اخلاقی و انرژی تیمی
      </Typography>
      <Table className="bg-gray-400">
        <TableHead>
          <TableRow>
            <TableCell align="center"><p className="font-vazir" >خصوصیت اخلاقی </p></TableCell>
            <TableCell align="center"><p className="font-vazir" >انرژی تیمی </p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamData.map((member) => (
            <TableRow key={member.id}>

              <TableCell  align="center"><p className="font-vazir">{member.trait}</p></TableCell>
              <TableCell  align="center"><p className="font-vazir">{member.energy}</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
