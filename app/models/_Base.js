import admin from 'firebase-admin';

export default class Base {
	constructor(collectionName) {
		this.model = admin.firestore().collection(collectionName);
	}

	insert(data) {
		return this.model.add(data);
	}

	async getDataByRef(docRef) {
		const doc = await docRef.get();

		return doc.exists ? doc.data() : null;
	}

	async getDataById(id) {
		const docRef = this.model.doc(id);

		return this.getDataByRef(docRef);
	}
}
