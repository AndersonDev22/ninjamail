import { Btn } from "./styles"

interface TextProps {
  text:string
}

export default function ButtonWhite(props:TextProps) {

  return(
    <Btn>
      {props.text}
    </Btn>


  )
}
