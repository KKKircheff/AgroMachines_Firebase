import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
import * as fs from "fs";
import * as admin from "firebase-admin";

type Replacements = {
    title: string;
    description: string;
    author: string;
    pageUrl: string;
    imageUrl: string;
    keywords: string;
};

const dynamicPaths = {
  home: {
    title: "Agro Machines Nederland",
    /* eslint-disable-next-line padded-blocks */
    description:
            "Внос, продажба и доставка от Нидерландия на поливни макари, високо напорни помпи, трактори и други земеделски машини втора употреба, office@agro-machines.nl телефон: +359 876 962484",
    author: "Red Digit, Enschede, Nederland",
    pageUrl: "https://agro-machines.nl",
    imageUrl: "https://agro-machines.nl/hero-images/homeHero.webp",
    /* eslint-disable-next-line padded-blocks */
    keywords:
            "поливни макари, поливна система, внос, продажба, земеделски машини, високо напорни помпи, трактори, Нидерландия, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl",
  },
  gallery: {
    title: "Agro Machines - Галерия доставени машини",
    /* eslint-disable-next-line padded-blocks */
    description:
            "Галерия доставени за клиенти поливни макари, високонапорни помпи, земеделски машини и други от Холандия.",
    author: "Red Digit, Enschede, Nederland",
    pageUrl: "https://agro-machines.nl/gallery",
    imageUrl: "https://agro-machines.nl/hero-images/galleryHero.webp",
    /* eslint-disable-next-line padded-blocks */
    keywords:
            "Галерия, доставени, поливни макари, поливна система, внос, земеделски машини, високо напорни помпи, трактори, Нидерландия, втора употреба",
  },
  offers: {
    title: "Agro Machines - Актуални предложения",
    /* eslint-disable-next-line padded-blocks */
    description:
            "Избрани изгодни оферти поливни макари, високонапорни помпи и земеделска техника налични към момента в Нидерландия.",
    author: "Red Digit, Enschede, Nederland",
    pageUrl: "https://agro-machines.nl/offers",
    imageUrl: "https://agro-machines.nl/hero-images/offersHero.webp",
    /* eslint-disable-next-line padded-blocks */
    keywords:
            "Оферти поливни макари, високо напорни помпи и земеделска техника втора употреба налични в Нидерландия. office@agro-machines.nl, телефон: +359 876 962484",
  },
  contact: {
    title: "Agro Machines - Контакт",
    description:
            "Контакти с Agro Machines Nederland: емайл: office@agro-machines.nl, телефон: +359 876 962484",
    author: "Red Digit, Enschede, Nederland",
    pageUrl: "https://agro-machines.nl/contact",
    imageUrl: "https://agro-machines.nl/hero-images/contactHero.webp",
    keywords:
            "контакт, Агро, Машинс, Недерлан, поливни макари, поливна система, внос, продажба, Холандия, Нидерландия, земеделски машини, високо напорни помпи, трактори, втора употреба, отлично качество, отлични, изгодно, Пазарджик, agro-machines.nl",
  },
};

admin.initializeApp();
setGlobalOptions({region: "europe-west1"});

export const dynamicIndex = onRequest(async (req, res) => {
  const path = req.path ? req.path.split("/") : req.path;
  let index = fs.readFileSync("./dynamicIndex/index.html").toString();

  const setMetas = ({
    title,
    description,
    author,
    pageUrl,
    imageUrl,
    keywords,
  }: Replacements) => {
    index = index.replace("__TITLE__", title);
    index = index.replace("__OG_TITLE__", title);
    index = index.replace("__DESCRIPTION__", description);
    index = index.replace("__AUTHOR__", author);
    index = index.replace("__OG_PAGE_URL__", pageUrl);
    index = index.replace("__OG_IMAGE_URL__", imageUrl);
    index = index.replace("__OG_DESCRIPTION__", description);
    index = index.replace("__KEYWORDS__", keywords);
  };
  console.log(path[0], path[1]);

  if (path[1] === "contact") {
    setMetas(dynamicPaths.contact);
  } else if (path[1] === "gallery") {
    setMetas(dynamicPaths.gallery);
  } else if (path[1] === "offers") {
    setMetas(dynamicPaths.offers);
  } else {
    setMetas(dynamicPaths.home);
  }

  res.status(200).send(index);
});
