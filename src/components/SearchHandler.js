import API from './utils/API';

const SearchHandler = async () => {
    const res = await API.search();
    return (
        <div>
            {res}
        </div>
    )
}

export default SearchHandler;