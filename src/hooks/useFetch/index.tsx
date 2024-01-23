import axios from 'axios';
import {useEffect, useState} from 'react';
import {Url} from '../../constants';
import {Product} from '../../models';

// type TApiResponse = {
//   status?: Number;
//   statusText?: String;
//   data: any;
//   error: any;
//   loading: Boolean;
// };

export default function useFetch(url: string) {
  const [isFetching, setIsFetching] = useState(true);
  const [result, setResult] = useState<Product[]>();
  const [error, setError] = useState();

  async function fetchData() {
    try {
      const result = await axios.get(url);

      //   console.log('REQUEST TO API:', JSON.stringify(result));
      setResult(result.data);
    } catch (error) {
      console.log('REQUEST ERROR:', JSON.stringify(error));
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {isFetching, result, error, fetchData};
}
