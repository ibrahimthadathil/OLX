import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; // Import getAuth
import { initializeApp } from "firebase/app";
import {addDoc, collection,getDocs, getFirestore} from 'firebase/firestore'
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import { Toaster,toast } from "sonner";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtlNSaQe2bhnI9wy_LEuodjl2MIZNStnc",
  authDomain: "olx-clone-b8a0f.firebaseapp.com",
  projectId: "olx-clone-b8a0f",
  storageBucket: "olx-clone-b8a0f.appspot.com",
  messagingSenderId: "747248663756",
  appId: "1:747248663756:web:82cfa26c0539658c5f5669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

const db = getFirestore(app)

const storage = getStorage(app)

const signup =async(name,email,password,phone)=>{
  
try {
  const response = await createUserWithEmailAndPassword(auth,email,password)
  const user = response.user
  await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:'local',
    email,
    phone
  })

} catch (error) {
  toast.error(error.code.split('/')[1].split('-').join(" "))
}
}

const login = async (email,password)=>{

  try {
    const response = await signInWithEmailAndPassword(auth,email,password)
  return true
  console.log('completed');
} catch (error) {
  toast.error(error.code.split('/')[1].split('-').join(" "))
  return false
  }

}

const logout = async ()=>{
  signOut(auth)
}


const uploadimg = async (img,name,category,price,userid)=>{
  let date = new Date()
  try {
    const storageRef = ref(storage, `/images/${img.name}`);
    await uploadBytes(storageRef, img);
    
    const downloadURL = await getDownloadURL(storageRef);

    
    await addDoc(collection(db,'products'),{
      name,
      category,
      price,
      downloadURL,
      userId:userid,
      createdAt:date.toString()
    })
    
  } catch (error) {
    console.error('Upload failed:', error);
  }

}

const getProducts = async()=>{
  try {
   
   const posts= await getDocs(collection(db,'products')).then((snap)=>{
      const allPost = snap.docs.map((product)=>{
        return {
          ...product.data(),id:product.id
        }
      })
      return allPost
      
   })

   return posts
  } catch (error) {
    
  }
}

const viewProduct = async (postdetails, setUser) => {
 
  const userID = postdetails.userId;
  

  try {
    const querySnapshot = await getDocs(collection(db,'user')); 
    querySnapshot.forEach((doc) => {
      const data=doc.data()
      if (data.uid === userID) {
        console.log(data);
        setUser(data);
       
        
      }
    });
  } catch (error) {
    console.error('Failed to fetch user details:', error);
    
  }
};

export { app, auth ,signup,login,logout,uploadimg,getProducts,viewProduct};
