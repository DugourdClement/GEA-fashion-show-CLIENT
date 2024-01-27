import {useSelector} from "react-redux";

const authPath = ['adminConsole'];

function SecuredRoute(props) {
    const userInformation = useSelector((state) => state.user.user)

    if (userInformation?.jwt && userInformation?.role[0] === 'ROLE_ADMIN' && authPath.includes(props.childrenName))
        return (
            <>
                {props.children}
            </>
        );
    else
        return (
            <>
                {props.children}
            </>
        );
}

export default SecuredRoute;
