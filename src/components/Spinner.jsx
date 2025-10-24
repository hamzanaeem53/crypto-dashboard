import { BarLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto 50px auto',
};

const Spinner = ({ color = 'blue', size = '150' }) => {
    return (
        <div>
            <BarLoader
                color={color}
                cssOverride={override}
                size={150}
                aria-label='Loading Spinner'
                data-testid='loader'
            />
        </div>
    );
};

export default Spinner;