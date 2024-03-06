import { States } from "../../constants";

export const Card = ({
    planet,
    name,
    status,
    minerals,
    carryCapacity,
    x,
    y,
    travelSpeed,
}) => {
    return (
        <div class="card">
            <div class="left">
                <div class="top">{planet}</div>
                <div class="middle">{name}</div>
                <span class="bottom">{States[status]}</span>
            </div>
            <div class="center">
                <div class="capacity-name">Carry Capacity</div>
                <div class="capacity-content" style={{ color: minerals < carryCapacity ? 'rgba(255, 255, 255, 1)' : 'rgba(107, 228, 128, 1)' }}>{minerals}/{carryCapacity}</div>
                <div class="position-name">Position</div>
                <div class="position-content">{Math.floor(x)},{Math.floor(y)}</div>
            </div>
            <div class="right">
                <div class="speed-name">Travel Speed</div>
                <div class="speed-content">{travelSpeed}</div>
            </div>
            <img src={require("../../Images/arrow.png")} class="arrow" />
        </div>
    );
};
