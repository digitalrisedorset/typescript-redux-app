

interface SearchRepositoryAction {
    type: 'search_repositories'
}

interface SearchRepositorySuccessAction {
    type: 'search_repositories_success',
    payload: string[]
}

interface SearchRepositoryErrorAction {
    type: 'search_repositories_error',
    payload: string
}

export type Action = SearchRepositoryAction | SearchRepositorySuccessAction | SearchRepositoryErrorAction
