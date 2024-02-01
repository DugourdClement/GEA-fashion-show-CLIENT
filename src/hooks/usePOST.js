import { useState, useEffect } from 'react';

const usePOST = ({ url, data, authorization, api }) => {
    const [initialRequest, setInitialRequest] = useState({url : url, data: data, authorization: authorization, api: api});
    const [response, setResponse] = useState();
    let result;

    useEffect(() => {
        const callApi = async () => {
            try {
                const [url, data, authorization, api] = [initialRequest.url, initialRequest.data, initialRequest.authorization, initialRequest.api]
                // Determine if the data is FormData and prepare headers accordingly
                const isFormData = data instanceof FormData;
                const headers = {};

                // Add authorization header if it's provided
                if (authorization) {
                    headers['Authorization'] = authorization;
                }

                // If data is not FormData, assume JSON and set the content type.
                // This section might need adjustment based on how your API instance handles headers.
                if (!isFormData) {
                    headers['Content-Type'] = 'application/json';
                    // Ensure your API instance applies these headers correctly.
                }
                console.log('err')
                // Make the request. Adjust this part if your API wrapper handles headers differently.
                if (url.length !== 0) {
                    if (Object.keys(data).length === 0 && data.constructor === Object) {
                        result = await api.post(url, {}, { headers });
                    } else {
                        result = await api.post(url, data, { headers });
                    }
                    setResponse(result);
                }
            } catch (error) {
                console.error(error);
                setResponse(error);
            }
        };

        callApi();
    }, [initialRequest]);

    return [response, setInitialRequest];
};

export default usePOST;
