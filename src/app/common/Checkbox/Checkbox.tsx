import React, {ChangeEvent} from "react";

interface Props {
    name: string;
    text: string;
    setData: React.EventHandler<ChangeEvent>
}

export const Checkbox = ({name,text, setData}: Props) => {
    return (
        <label>
            <input onChange={setData} name={name} type="checkbox"/>
            <span>{text}</span>
        </label>
    )
}