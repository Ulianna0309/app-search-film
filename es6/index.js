/*import * as PromiseApi from './api-promise'

PromiseApi.userReg()
.then(regRes => {
	console.log(regRes);
	return PromiseApi.userAuth(regRes.id)
})
.then(authRes => {
	console.log(authRes);
	return PromiseApi.userData(authRes.token)
})
.then(dataRes => console.log(dataRes))
.catch(err => console.log(err.msg))
/*CallbackApi.userReg(
	regRes => {
		console.log(regRes);

		CallbackApi.userAuth(
			regRes.id,
			authRes => {
				console.log(authRes);

				CallbackApi.userData(
					authRes.token,
					dataRes => {
						console.log(dataRes);
					},
				err => console.log(err)
				)
			},
			err => console.log(err))
	    },
	err => console.log(err)
);*/
import 'babel-polyfill';
import * as AsyncApi from './api-async'
 async function userProcess() {
 	const regRes = await AsyncApi.userReg();
 	console.log(regRes);
 	const authRes = await AsyncApi.userAuth(regRes.id)
 	console.log(authRes);
 	const dataRes = await AsyncApi.userData(authRes.token)
 	console.log(dataRes);

 	return dataRes.data
 }

 userProcess()
 .then(data => console.log(data))
 .catch(err => console.log(err.message))
