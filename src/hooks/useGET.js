import {useState, useEffect} from 'react'

const useGET = ({url, data, authorization, api}) => {
    const [initialRequest, setInitialRequest] = useState({
        url: url,
        data: data,
        authorization: authorization,
        api: api
    });
    const [response, setResponse] = useState();
    let result;

    useEffect(() => {
        const callApi = async () => {
            try {
                if (initialRequest.url !== '') {
                    result = await initialRequest.api.get(initialRequest.url, initialRequest.authorization);
                    setResponse(result);
                }
            } catch (error) {
                console.log(error);
            }

        }

        callApi();
    }, [initialRequest]);

    return [response, setInitialRequest];
};

export default useGET;
