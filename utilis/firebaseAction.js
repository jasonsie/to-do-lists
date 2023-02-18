import firestore from './firebase';

const getLists = async (user) => {
  let initList = [];
  const snapshot = await firestore?.collection(user.id)?.get();
  snapshot.docs.forEach((doc) => initList.push(doc.data()));
  return initList;
};

const createItem = async (userId, item) => {
  const ref = await firestore.collection(userId).add(item);
  ref.set({ id: ref.id, ...item });
  return await { ...item, id: ref.id };
};

const updateItem = async (userId, id, data) => {
  await firestore
    .collection(userId)
    .doc(id)
    .update({ ...data, checked: !data.checked });
  return id;
};

const deleteItem = async (userId, id) => {
  await firestore.collection(userId).doc(id).delete();
  return id;
};

export { getLists, createItem, updateItem, deleteItem };
