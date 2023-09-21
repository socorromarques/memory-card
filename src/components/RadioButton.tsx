import { Children } from "react";

export default function RadioButton({
    id = getNewId(),
    name = 'radioButtonName',
    children: buttonDescription = 'Descrição do botão',
    buttonChecked = false,
    onButtonclick = null,

}){
    function handlleRadioButtonChange(){
        if (onButtonclick) {
            onButtonclick();
        }
    }
    return(
        <div className="flex flex-row items-center space-x-2">
            <input 
            id={id} 
            type="radio" 
            name={name} 
            checked={buttonChecked} 
            onChange={handlleRadioButtonChange}
            />
            <label htmlFor={id}>{buttonDescription}</label>
        </div>
    )
}