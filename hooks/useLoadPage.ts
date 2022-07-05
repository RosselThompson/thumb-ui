import { useEffect, useState } from 'react';
import { mockData } from 'mock/MockData';
import { IPersonInfo } from 'types/Interfaces/Data/IData';

export const useLoadPage = () => {
  const [data, setdata] = useState<IPersonInfo[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setdata(mockData);
      setisLoading(false);
    }, 1500);
  }, []);

  return { data, isLoading };
};
