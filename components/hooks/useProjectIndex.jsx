import { useEffect, useState } from "react";

export default function useProjectIndex() {
    const [index, setIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(null);


    return { index, setIndex, dataIndex, setDataIndex };
}