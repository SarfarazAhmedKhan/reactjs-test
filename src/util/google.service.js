// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
// import {snackbarService} from './snackbar.service';
// import { API_SERVICE } from '../../shared/services/constant';
import { SERVICE_CONFIG_URLS } from "../ApiServices/config";
import apiService from "./api.service";

const API_KEY = "AIzaSyDq2a4HgWb6qYhIMHip7HiZhHQU8EfpyIQ";

export const googleService = {
    signIn,
    signOut,
    configure,
    isSignedIn,
    getCurrentUser,
    getPlaceDetails,
    autoCompletePlaces
};

async function autoCompletePlaces(searchTxt) {
    const response = await apiService.get(
        SERVICE_CONFIG_URLS.EXTERNAL.AUTOCOMPLETE,
        {
            input: searchTxt,
            types: "address",
            key: API_KEY
        },
        {
            https: true,
            baseURL: SERVICE_CONFIG_URLS.EXTERNAL.BASE_URL,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
    );
    return response;
}

async function getPlaceDetails(place_id) {
    const response = await apiService.get(
        SERVICE_CONFIG_URLS.EXTERNAL.PLACE_DETAILS,
        {
            place_id,
            key: API_KEY
        },
        { baseURL: SERVICE_CONFIG_URLS.EXTERNAL.BASE_URL }
    );
    return response;
}

function configure() {
    //TODO:signIn
    //   GoogleSignin.configure({
    //     webClientId: API_SERVICE.WEB_CLIENT_ID,
    //     iosClientId:API_SERVICE.IOS_CLIENT_ID,
    //     offlineAccess: true,
    //     forceCodeForRefreshToken: true,
    //   });
}

async function signIn() {
    //TODO:signIn
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     return userInfo;
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       snackbarService.fail('User cancelled the Sign in flow');
    //       return;
    //       // user cancelled the login flow
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       // snackbarService.fail('Operation is in progress already');
    //       return;
    //       // operation (e.g. sign in) is in progress already
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //       snackbarService.fail('Play services not available or outdated');
    //       return;
    //       // play services not available or outdated
    //     } else {
    //       snackbarService.fail('Something went wrong while Sign in via Google');
    //       return;
    //       // some other error happened
    //     }
    //   }
}

async function isSignedIn() {
    //TODO:isSignedIn
    //   const isSignedIn = await GoogleSignin.isSignedIn();
    //   return !isSignedIn;
}

async function getCurrentUser() {
    //TODO:getCurrentUser
    //   const currentUser = await GoogleSignin.getCurrentUser();
    //   return currentUser;
}

async function signOut() {
    //TODO:signOut
    //   try {
    //     configure();
    //     await GoogleSignin.revokeAccess();
    //     await GoogleSignin.signOut();
    //     return true;
    //   } catch (error) {
    //     console.error(error);
    //   }
}

export default googleService;
