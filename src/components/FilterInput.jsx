const FilterInput = ({ searchTerm, onSearchTerm }) => {
    return (
        <div className="filter">
            <input type="text" value={searchTerm} placeholder="Search coins by name or symbol" onChange={(e) => onSearchTerm(e.target.value)} />
        </div>
    );
};

export default FilterInput;