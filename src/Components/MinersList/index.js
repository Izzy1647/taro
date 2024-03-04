import { useEffect, useState } from "react";
import { getMiners } from "../../Services/miners";
import { Card } from "./Card";

import "./index.css";

export const MinersList = () => {
    const [minersList, setMinersList] = useState([]);
    useEffect(() => {
        const init = async () => {
            const miners = await getMiners();
            setMinersList(miners);
        };

        init();
    }, []);

    return minersList.map((item) => <Card {...item} />);
};
