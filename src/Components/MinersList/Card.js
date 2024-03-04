export const Card = ({
    planet,
    name,
    status,
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
                <div class="bottom">{status}</div>
            </div>
            <div class="center"></div>
            <div class="right"></div>
        </div>
    );
};
