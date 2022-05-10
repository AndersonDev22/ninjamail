import { Btn } from "./styles"

interface TextProps {
  text:string
}

export default function ButtonGreen(props:TextProps) {

  return(
    <Btn>
      {props.text}
    </Btn>


  )
}
