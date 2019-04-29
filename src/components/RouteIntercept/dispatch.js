import ACTIONTYPE from '../../store/action.types'

export default function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateLogin: time => {
            dispatch({ type: ACTIONTYPE.login, payload: time })
        },
        updateToken: token => {
            dispatch({ type: ACTIONTYPE.updateToken, payload: token })
        },
        resetHttp: http => {
            dispatch({ type: ACTIONTYPE.resetHttp, payload: http })
        },
        updateMenu: menu => {
            dispatch({ type: ACTIONTYPE.updateMenu, payload: menu })
        },
        onCloseDrawer: drawer => {
            dispatch({ type: ACTIONTYPE.drawer, payload: drawer })
        }
    }
}