import { useCollection } from "react-firebase-hooks/firestore"
import firebase from "../../../lib/clientApp";
import { db } from "../../../lib/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function OrdersQuery() {

    // const [user, loading, error] = useAuthState(firebase.auth() as any);
    // console.log("Loading:", loading, "|", "Current user:", user);
   
  // const docRef = db.collection('orders').doc('asdasd');
    return (
        <div className='dark-mode-shaded items-center justify-items-center grid'>
            Hello
        </div>
      );
}

