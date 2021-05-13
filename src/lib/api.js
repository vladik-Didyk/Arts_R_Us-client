// import axios from "axios";
// import FormData from "form-data";
// const BaseUrl = 'http://localhost:5000';

export async function getPictureData(pictureName) {
  const pictureData = jsonMock.find((e) => e.fileName === pictureName);
  return pictureData;
}

export async function createPicture(picture) {
  console.log("we need a real connection to the backend");
  const pictureData = await getPictureData(picture.name);
  return pictureData;
  //const form = new FormData();
  //form.append('picture', picture);
  // const response = await axios.post(BaseUrl + '/', form, { headers: {'Content-Type': 'multipart/form-data'}});
  // return response.data;
}
export async function login(email, password) {
  console.log(email, password);
  // const response = await axios.post(BaseUrl + '/login', { email, password });
  // return response.data;
}
export async function signup(
  email,
  password,
  firstName,
  lastName,
  phoneNumber
) {
  console.log(email, password, firstName, lastName, phoneNumber);

  // const response = await axios.post(BaseUrl + '/users', { email, password, firstName, lastName, phoneNumber });
  // return response.data;
}

const jsonMock = [
  {
    id: "1",
    fileName: "1.jpg",
    title: "Realism",
    text: "Is a style of art regarded by most as “real art”. This is because it attempts to portray the subject as it actually appears in real life but stops short of appearing like a photograph. Realism art is without stylization or following the rules of formal artistic theory. Instead the artist spends a fair amount of time and effort paying attention to creating an accurate depiction of life forms and objects, perspective creating the illusion of reality, good composition, lights and darks, and color and tone.",
    path: "images/mocks/1.jpg",
  },
  {
    id: "2",
    fileName: "2.jpg",
    title: "Photorealism ",
    text: "super realism, sharp focus realism, hyper realism) is an art style where the artwork looks as realistic as a photo. The illusion of reality is so minutely fine tuned that the painting looks exactly like a large, sharply focused photograph on canvas or other paint support. It is a style where careful detail down to the last grain of sand on the seashore or the pores and wrinkles on a person’s face has been included. Nothing is left out or too insignificant or unimportant to not be included in the composition. Photorealism is that realistic.",
    path: "images/mocks/2.jpg",
  },
  {
    id: "3",
    fileName: "3.jpg",
    title: "Painterly ",
    text: "Is an art style characterized by visible brushstrokes and texture left in the paint medium. Artworks featuring this art style can be created using oils, acrylics, watercolors, gouache, or any medium where a brush is used. In the past, early painters took great pains to eliminate brushstrokes or texture from their paintings by working and blending their paint. Not so with painterly artists. They make no attempt to hide their brushwork that has been loosely and quickly applied. The paint doesn’t have to be applied in a thick manner either, thin layers of paint work just as well using the painterly art style.",
    path: "images/mocks/3.jpg",
  },
  {
    id: "4",
    fileName: "4.jpg",
    title: "Impressionism ",
    text: "Is a style of painting that has the appearance of being rough and unfinished, and characterized by small, thin visible brushstrokes. The subject matter is usually of common and ordinary subjects, with an emphasis on the accurate depiction of light. Impressionistic paintings are often painted outdoors to capture the natural sunlight and color of their subjects. Black is rarely used since impressionist artists prefer mixing and using dark tones and complementary colors. Impressionism is more a representation of an artist’s impression. It does not try to be accurate in its detail, but rather, is more like an expression of the heart.",
    path: "images/mocks/4.jpg",
  },
  {
    id: "5",
    fileName: "5.jpg",
    title: "Abstract ",
    text: "Is is art that doesn’t resemble anything from “real life”. It’s an art style that is intentionally non-representational and seeks to achieve its point or subject using shapes, forms, colors, and textures. Every object on the canvas is represented by either colors and or shapes. For example colors can represent emotions and shapes can symbolize objects.",
    path: "images/mocks/5.jpg",
  },
  {
    id: "6",
    fileName: "6.jpg",
    title: "Surrealism",
    text: "Is s a modern art style of painting that juxtaposes, various abstract concepts together to give a startling effect. It is characterized by fully recognizable images which are realistically painted, taken out of their normal setting and contexts then reassembled or organized within an ambiguous, paradoxical, or shocking framework.  Surrealist paintings are often illogical and express imaginative dreams with visions that emphasize the subconscious rather than rationale.",
    path: "images/mocks/6.jpg",
  },
  {
    id: "7",
    fileName: "7.jpg",
    title: "Pop Art",
    text: "Is is a modern art style that started back in the 1950s and draws inspiration from commercial and consumer aspects of everyday life, especially in the American culture. Such imagery included advertising, mass media, comic books, celebrities and elements of popular culture, like magazines, movies, and even bottles and cans. Pop art paintings tend to focus on bold colors and realistic imagery. There is usually no hidden meaning in the composition either and pop artists rarely use any of the traditional techniques of perspective to create an illusion of realism in the painting. Some pop artists use mass production techniques such as silk screening to replicate their works, mirroring the manufacturing process of consumer goods. Because of its use of commercial imagery, pop art is one of the most recognizable styles of modern art.",
    path: "images/mocks/7.jpg",
  },
];
