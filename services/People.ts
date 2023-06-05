import { db } from 'services/Firebase';
import {
  collection,
  getDocs,
  updateDoc,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  query,
  where,
  doc,
  orderBy,
} from 'firebase/firestore';
import { IPersonInfo } from 'types/Interfaces/Data/IData';
import { mockData } from 'mock/MockData';

const appMode = process.env.NEXT_PUBLIC_MODE;

export const personConverter = {
  toFirestore(person: IPersonInfo): DocumentData {
    return {
      id: person.id,
      name: person.name,
      description: person.description,
      category: person.category,
      picture: person.picture,
      lastUpdated: person.lastUpdated,
      votes: person.votes,
      isVotePosted: person.isVotePosted,
    };
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): IPersonInfo {
    const data = snapshot.data(options);
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      category: data.category,
      picture: data.picture,
      lastUpdated: data.lastUpdated,
      votes: data.votes,
      isVotePosted: data.isVotePosted,
    };
  },
};

export const getPeople = async () => {
  const data: IPersonInfo[] = [];

  if (appMode === 'OFFLINE') {
    console.log('REQUEST ON OFFLINE MODE');
    return mockData;
  }

  const q = query(
    collection(db, 'people').withConverter(personConverter),
    orderBy('id', 'asc')
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export const updatePerson = async (id: number, updatedDoc: IPersonInfo) => {
  if (appMode === 'OFFLINE') {
    console.log('REQUEST ON OFFLINE MODE');
    const currentElement = mockData.find((e) => e.id === id);
    return {
      ...currentElement,
      votes: updatedDoc.votes,
      isVotePosted: updatedDoc.isVotePosted,
    };
  }

  const q = query(
    collection(db, 'people').withConverter(personConverter),
    where('id', '==', id)
  );
  const findPeople = await getDocs(q);
  const getPerson = doc(db, 'people', findPeople.docs[0].id);
  await updateDoc(getPerson, {
    ...updatedDoc,
    votes: updatedDoc.votes,
    isVotePosted: updatedDoc.isVotePosted,
  });
};
