import { getFirestore,collection, doc, getDoc, setDoc, runTransaction } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../externalLibraries/firebase";


export default async function handler (req, res){

    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    const db = getFirestore(app);
    
    //console.log('object');
    if(req.method == 'POST')
    {
        //user is viewing the blog post | the view count is stored in firestore
        //    //if the document of the blog is not in the collection create it;
        //    //slug : req.query.blog
        
        
        const slug = req.query.blog
        
        const docRef = doc(db, 'views',`${slug}`);
        const docSnap = await getDoc(docRef)
        const blogViews = collection(db, "views");
        let viewCount = 0;
        
        if (docSnap.exists()) {


            //console.log("Document data:", docSnap.);
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(docRef);

                viewCount = sfDoc.data().viewCount + 1;
                transaction.update(docRef, { viewCount: viewCount });
              });


        } else {
            // doc.data() will be undefined in this case
            //console.log("No such document!");
            let sample  = await setDoc(doc(blogViews, `${slug}`),{
                viewCount:1
                });
            viewCount = 1;
        }
    
    
        return res.json(viewCount);
    }

    if(req.method == 'GET')
    {
        const slug = req.query.blog
        
        const docRef = doc(db, 'views',`${slug}`);
        const docSnap = await getDoc(docRef)
        if(!docSnap.exists())
        {
            return res.json(1);
        }
        const viewCount = docSnap.data().viewCount
        return res.json(viewCount);
    }
}