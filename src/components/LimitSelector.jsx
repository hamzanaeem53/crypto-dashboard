const LimitSelector = ({ limit, onLimitChange }) => {
    return (
        <div className="controls">
            <label htmlFor="limit">Show: </label>
            <select id="limit" onChange={(e) => onLimitChange(Number(e.target.value))} value={limit}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
};

export default LimitSelector;