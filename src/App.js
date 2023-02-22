import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {


  const [km, setKm] = useState()
  const [price, setPrice] = useState()
  const [kmL, setKmL] = useState()
  const [priceTotal, setPriceTotal] = useState()

  const calculate = ()=>{
    setPriceTotal(((price/kmL) * km).toFixed(2)) 
  }
  console.log(priceTotal);

  return (

    <div className="App">
            <h1>Preço Combustível</h1>

      <div className='container-inputs'>
          <form>
              <TextField onChange={(e)=>{setKm(e.target.value.replace(",", "."))}} sx={{width: '100%'}} id="outlined-basic" label="quilômetros(KM)" variant="outlined" />
              <TextField onChange={(e)=>{setPrice(e.target.value.replace(",", "."))}} sx={{width: '100%', marginTop: '50px'}} id="outlined-basic" label="Preço(R$)" variant="outlined" />
              <TextField onChange={(e)=>{setKmL(e.target.value.replace(",", "."))}} sx={{width: '100%', marginTop: '50px'}} id="outlined-basic" label="KM/L" variant="outlined" />
              <div className='container-button'>
                <Button onClick={calculate} variant="contained">Calcular</Button>
              </div>
              {priceTotal ?               
              (<div className='valor'>
              <h4> Valor : </h4>
              <p>{` ${ priceTotal} R$`}</p>
              </div>)
              :
              ('')

          }
          </form>

          

      </div>
    </div>
  );
}

export default App;
