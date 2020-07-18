import React, { useState } from "react";

const Page: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount((c) => c + 1)}>
                +
            </button>
            <button onClick={() => setCount((c) => c - 1)}>
                -
            </button>
        </>
    );
};

export default Page;
