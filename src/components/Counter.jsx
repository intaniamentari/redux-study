import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

const Counter = () => {
    // Read the data from the store
    const count = useSelector((state) => state.counter.value) // state.reducerNameOnStore.initialNameOnSlice
    
    // Changing the data by sendig "actions" to the store
    const dispatch = useDispatch()
    
    return <div>
        <h1>{count}</h1>
        {/* konsepnya memanggil fungsi di dalam fungsi wkwkw */}
        <button onClick={() => dispatch(decrement())}>+</button>
        <button onClick={() => dispatch(increment())}>-</button>
    </div>
}

export default Counter