// src/components/QuoteList.js
import React from "react";
import Contact from './Contact';

const user = [
{ 
  avatar:"https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg",
  name:"Mélanie Bryant",
  online:'online',
},

{ 
  avatar:"http://www.studiobcarre.com/wp-content/uploads/2018/11/Photo-identite-Les-Sables-d-olonne-1024x1024.jpg",
  name:"Vickie Riley",
  
},

{ 
  avatar:"http://www.photomorlat.fr/wp-content/uploads/2016/05/Photos-didentité-nouvelles-normes-à-domicile-ou-à-mon-studio_2.jpg",
  name:"Allan Graham",
  online:'online',
},

{ 
  avatar:"https://www.nathaliehupin-photo.be/photo/wp-content/uploads/2016/07/identite-8005-2.jpg",
  name:"Grace Viguier",
  
},

{ 
  avatar:"https://pvtistes.net/forum/attachments/comment-obtenir-son-pvt-canada-351/31918d1503420353-photos-didentite-demande-de-permis-eic-pvt-jp-etc-kid_6140-ca-visa-digital-format-420x540-px.jpg",
  name:"Rebecca St James",
  
}

]

const ContactList = () => (
  <div>
    {user.map(item => (
      <Contact avatar={item.avatar} name={item.name} online={item.online} />
    ))}
  </div>
);


export default ContactList;
