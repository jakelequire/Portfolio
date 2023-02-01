import { useEffect, useState } from "react";

export default function useIndex() {
    const [index, setIndex] = useState(null);

    useEffect(() => {
        const updateIndex = document.addEventListener("onClick", (e) => {
            setIndex(e.target.id);
            return () => {
                document.removeEventListener("onClick", updateIndex);
            }
            });

    }, [index]);
}