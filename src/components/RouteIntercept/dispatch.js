import ACTIONTYPE from '../../store/action.types'

export default function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateToken: token => {
            dispatch({ type: ACTIONTYPE.updateToken, payload: token })
        },
        resetHttp: http => {
            dispatch({ type: ACTIONTYPE.resetHttp, payload: http })
        },
        updateMenu: menu => {
            dispatch({ type: ACTIONTYPE.updateMenu, payload: menu })
        }
    }
}