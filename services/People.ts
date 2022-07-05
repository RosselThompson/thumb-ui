import { db } from 'services/Firebase';
import {
  collection,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { IPersonInfo } from 'types/Interfaces/Data/IData';

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

export const getpeople = async () => {
  const data: IPersonInfo[] = [];
  const querySnapshot = await getDocs(
    collection(db, 'people').withConverter(personConverter)
  );

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};
