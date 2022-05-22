import React from "react";
import { Footer } from "./Styles";
import {Typography} from '@mui/material'
export default function App() {


  return (
      <Footer sx={{ p: 6 }} component="footer">
        <hr/>
        <Typography variant="h8" align="center" gutterBottom style={{color: '#fff'}}>
          Designed and Created by Turja Chowdhury
        </Typography>

      </Footer>
  );
}