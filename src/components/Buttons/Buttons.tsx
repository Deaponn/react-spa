import { useAppDispatch } from "../../app/hooks"
import { increment, decrement } from "./buttonsSlice"

export default function Buttons(){
    const dispatch = useAppDispatch()

    return <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
}