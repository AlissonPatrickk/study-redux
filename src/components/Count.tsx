import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Count: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    return (
        <div>
            <h3>{count}</h3>
        </div>
    )
}
export default Count