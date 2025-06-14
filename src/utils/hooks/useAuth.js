import { useSelector, useDispatch } from "react-redux";
import { setUser, initialState } from "../../store/auth/userSlice";
// import { apiSignIn, apiSignOut } from 'services/AuthService'
import {
  onSignInSuccess,
  onSignOutSuccess,
} from "../../store/auth/sessionSlice";
import appConfig from "../../configs/app.config";
import { REDIRECT_URL_KEY } from "../../constants/app.constant";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";

function useAuth() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const query = useQuery();

  const { token, signedIn } = useSelector((state) => state.auth.session);

  const signIn = async ({ userName, password }) => {
    try {
      // const resp = await apiSignIn({ userName, password })
      const resp = { data: { token: "dfugkbkubdkfvgk" } };
      if (resp.data) {
        const { token } = resp.data;
        dispatch(onSignInSuccess(token));
        if (resp.data.user) {
          dispatch(
            setUser(
              resp.data.user || {
                avatar: "",
                userName: "Anonymous",
                authority: ["USER"],
                email: "",
              }
            )
          );
        }
        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
        return {
          status: "success",
          message: "",
        };
      }
    } catch (errors) {
      return {
        status: "failed",
        message: errors?.response?.data?.message || errors.toString(),
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    dispatch(setUser(initialState));
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    authenticated: token && signedIn,
    signIn,
    signOut,
  };
}

export default useAuth;
