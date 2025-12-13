import { formControlClasses } from '@mui/material/FormControl';
import numeral from 'numeral'
const CurrencyFormat = ({amount}) =>{
  const formatted = numeral(amount).format('$0,0.00')
  return <div>{formatted}</div>
}

export default  CurrencyFormat;
