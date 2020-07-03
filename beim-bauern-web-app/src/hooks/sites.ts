import { collectionData } from "rxfire/firestore";
import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { Observable } from "rxjs";

interface Site {
  id: string;
  title: string;
}

export const useSites = (userId: string): [Site[], boolean, Error?] => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const sitesRef = firestore.collection("sites");
    const subscription = collectionData(sitesRef, "id").subscribe((data) => {
      setSites(data as Site[]);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [userId]);

  return [sites, loading];
};
