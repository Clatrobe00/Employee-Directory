import API from './utils/API';

const SearchHandler = async () => {
    const res = await API.search();
    return res;
}

export default SearchHandler;