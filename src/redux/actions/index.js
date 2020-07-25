import  * as Types  from './types'

export const selectLibrary = (libraryId)=> {
	return {
		type: 'select_library',
		payload: libraryId

	};

}

export const swipeRegister = (mobile)=> {
	return {
		type: Types.MOBILE_ENTERED,
		payload: mobile

	};

}