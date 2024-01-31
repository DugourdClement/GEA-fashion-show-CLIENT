import {userActions} from "../slices/user-slice";
import {serverAPI} from "../../config/api";

const get = ({api, url, auth}) => {
    return api.get(url, auth);
};

export const fetchPlantList = (user) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await get({
                api: serverAPI,
                url: `/central/get-all-centrals?idUser=${user.id}`,
                auth: {headers: {Authorization: `Bearer ${user.jwt}`}}
            });

            if (response.status < 200 || response.status >= 300) {
                throw new Error('Could not fetch list data!');
            }

            return await response.data;
        };

        dispatch(userActions.login(user));

        try {
            const listData = await fetchData();
            dispatch(plantActions.setList(listData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    severity: 'error',
                    title: 'Erreur !',
                    message: 'La récupération de la liste à échouer.',
                })
            );
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(userActions.logout());
    }
};