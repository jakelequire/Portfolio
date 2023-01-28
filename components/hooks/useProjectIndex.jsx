import { useEffect, useState } from "react";

export default function useProjectIndex() {
    const [index, setIndex] = useState(null);
    


    return { index, setIndex };
}