import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import useScript from "./useScript";

const GOOGLE_PLACE_SRC =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDwpwQNbbqocBQDopln5AglXpPa4xlDqmQ&libraries=places";

export default function useLocationPrediction(input) {
    const autocomplete = useRef();

    const status = useScript(GOOGLE_PLACE_SRC);

    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        if (!autocomplete.current && status === "ready") {
            autocomplete.current = new window.google.maps.places.AutocompleteService();
        }
    }, [status]);

    useEffect(() => {
        debouncedGetPlacePredictions(input);
    }, [input]);

    const debouncedGetPlacePredictions = useCallback(debounce(getPlacePredictions, 500), []);

    function getPlacePredictions(input) {
        if (autocomplete.current && input) {
            fetch(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=address&key=AIzaSyDwpwQNbbqocBQDopln5AglXpPa4xlDqmQ`,
                {
                    method: "get"
                }
            ).then(console.log);
            autocomplete.current.getPlacePredictions(
                { input, types: ["address"], componentRestrictions: { country: ["us"] } },
                (predictions) => {
                    if (predictions?.length > 0) {
                        predictions.forEach((x) => {
                            const description = x?.description?.split(",");
                            x.description = `${description?.[0]},${description?.[1]}`;
                        });
                        console.log({ predictions });
                        setPredictions(predictions);
                    }
                }
            );
        } else {
            setPredictions([]);
        }
    }

    return predictions;
}
