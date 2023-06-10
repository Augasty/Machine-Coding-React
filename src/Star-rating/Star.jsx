const Star = ({ val , marked }) => {
    return (
        <span data-val={val } className="star" style={{ color: 'gold', fontSize: '60px' }}>
            {marked ? "\u2605" : "\u2606"}
        </span>
    );
};

export default Star;