import React from 'react';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Contact 
      avatar="https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg"
      name="Mélanie Bryant" 
      online/>

      <Contact 
      avatar="http://www.studiobcarre.com/wp-content/uploads/2018/11/Photo-identite-Les-Sables-d-olonne-1024x1024.jpg"
      name="Vickie Riley" 
      />

      <Contact 
      avatar="http://www.photomorlat.fr/wp-content/uploads/2016/05/Photos-didentité-nouvelles-normes-à-domicile-ou-à-mon-studio_2.jpg"
      name="Allan Graham" 
      online/>
    </div>
  );
}

export default App;
