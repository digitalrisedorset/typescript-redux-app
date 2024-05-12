import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType} from "../action-types";
import { Action } from "../actions";

interface NpmSearchResultInterface {
    data: {
        objects: any[]
    }
}

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const data: NpmSearchResultInterface = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const names: string[] = data.data.objects.map((result: any) => {
                return result.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}