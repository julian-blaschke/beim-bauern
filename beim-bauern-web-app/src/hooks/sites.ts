import { collectionData, docData } from "rxfire/firestore";
import { useState, useEffect } from "react";
import { firestore } from "../firebase";

interface Site {
  id: string;
  title: string;
}

/*
 * Gets a subscribtion of the all the sites of a user
 * @param userId the user`s id of which the sites are retrieved
 * @returns sites of the user, if the quiery is still in progress/loading,an error - if occured
 */
export const useSites = (userId: string): { sites?: Site[]; error?: Error } => {
  const [sites, setSites] = useState<Site[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const sitesRef = firestore.collection("sites");
    const subscription = collectionData(sitesRef, "id").subscribe(
      (data) => setSites(data as Site[]),
      (error) => setError(error)
    );
    return () => subscription.unsubscribe();
  }, [userId]);

  return { sites, error };
};

/*
 * Gets a specific Site by id
 * @param id
 * @returns site
 */
export const useSite = (id: string): { site?: Site; error?: Error } => {
  const [site, setSite] = useState<Site>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const siteRef = firestore.doc(`sites/${id}`);
    const subscription = docData(siteRef).subscribe(
      (doc) => setSite(doc as Site),
      (error) => setError(error)
    );
    return () => subscription.unsubscribe();
  }, [id]);

  return { site, error };
};
