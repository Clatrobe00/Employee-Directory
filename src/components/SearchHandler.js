import API from './utils/API';

const SearchHandler = async () => {
    const res = await API();
    console.log(res.data.results);
    return (
        <div>
            {res.data.results}
        </div>
    )
}

export default SearchHandler;