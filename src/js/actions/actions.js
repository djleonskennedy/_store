/**
 * Created by Yuriy.Yakovenko on 12/21/2015.
 */
import AppConstants 			from '../constants/constants'
import { dispatch, register } 	from '../dispatchers/dispatcher'

export default {
	addItem( item ){
		dispatch({
			actionType: AppConstants.ADD_ITEM, item
		})
	},
	removeItem( item ){
		dispatch({
			actionType: AppConstants.REMOVE_ITEM, item
		})
	},
	increaseItem( item ){
		dispatch({
			actionType: AppConstants.INCREASE_ITEM, item
		})
	},
	dicreaseItem( item ){
		dispatch({
			actionType: AppConstants.DICREASE_ITEM, item
		})
	}
}