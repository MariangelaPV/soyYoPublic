import { db } from './firebase';
import { doc, setDoc, addDoc, updateDoc, collection, where, getDoc } from 'firebase/firestore';

/*export function addCollection() {
    addDoc(collection(db, "VisitsCounter"), {});
} NO TOCAR, AÑADE UNA TABLA NUEVA A LA BASE DE DATOS
*/
export function addUser(idUser) {
    const docRef = doc(db, "VisitsCounter", idUser);
    setDoc(docRef, {
        publicProfile: 0,
        whatsapp: 0,
        instagram: 0,
        phone: 0,
        email: 0,
        linkedin: 0,
        twitch: 0,
        twitter: 0,
        tiktok: 0,
        facebook: 0,
        qrOffline: 0,
        shareRRSS: 0,
        maps: 0
    });
}

export async function userExists(idUser) {
    try {
        const docRef = doc(db, "VisitsCounter", idUser);
        var verify = false;
        await getDoc(docRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    verify = true
                }
            })
    } catch (error) {
        console.error(error);
    }
    return verify;
}

export function addVista(socialMedia, idUser) {
    userExists(idUser).then(function (result) {
        if (!result) {
            addUser(idUser);
        }
    })
    const docRef = doc(db, 'VisitsCounter', idUser)
    let listaVistas = [];
    let numeroVistas = 0;
    getDoc(docRef)
        .then((doc) => {
            listaVistas = doc.data();
            switch (socialMedia) {
                case 'publicProfile':
                    numeroVistas = listaVistas.publicProfile;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        publicProfile: numeroVistas
                    });
                    break;
                case 'whatsapp':
                    numeroVistas = listaVistas.whatsapp;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        whatsapp: numeroVistas
                    });
                    break;
                case 'phone':
                    numeroVistas = listaVistas.phone;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        phone: numeroVistas
                    });
                    break;
                case 'maps':
                    numeroVistas = listaVistas.maps;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        maps: numeroVistas
                    });
                    break;
                case 'instagram':
                    numeroVistas = listaVistas.instagram;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        instagram: numeroVistas
                    });
                    break;
                case 'linkedin':
                    numeroVistas = listaVistas.linkedin;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        linkedin: numeroVistas
                    });
                    break;
                case 'email':
                    numeroVistas = listaVistas.email;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        email: numeroVistas
                    });
                    break;
                case 'tiktok':
                    numeroVistas = listaVistas.tiktok;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        tiktok: numeroVistas
                    });
                    break;
                case 'twitter':
                    numeroVistas = listaVistas.twitter;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        twitter: numeroVistas
                    });
                    break;
                case 'facebook':
                    numeroVistas = listaVistas.facebook;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        facebook: numeroVistas
                    });
                    break;
                case 'twitch':
                    numeroVistas = listaVistas.twitch;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        twitch: numeroVistas
                    });
                    break;
                case 'qrOffline':
                    numeroVistas = listaVistas.qrOffline;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        qrOffline: numeroVistas
                    });
                    break;
                case 'shareRRSS':
                    numeroVistas = listaVistas.shareRRSS;
                    numeroVistas = notNull(numeroVistas);
                    updateDoc(docRef, {
                        shareRRSS: numeroVistas
                    });
                    break;
                default:
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        });

}

function notNull(numero) {
    if (isNaN(parseFloat(numero))) {
        numero = 1;
    } else {
        numero++;
    }
    return numero;
}
