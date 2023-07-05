import { filterCategories } from "../constant/filterCategories";

// Generate a random date within a specified range
function getRandomDate(start, end) {
  const startDate = start.getTime();
  const endDate = end.getTime();
  const randomTimestamp = startDate + Math.random() * (endDate - startDate);
  return new Date(randomTimestamp);
}

// Generate a random number within a specified range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random property listing titles
function generateRandomTitle() {
  const adjectives = ['Luxurious', 'Cozy', 'Modern', 'Charming', 'Spacious', 'Stunning', 'Elegant', 'Secluded', 'Unique'];
  const nouns = ['Villa', 'Apartment', 'Cottage', 'Retreat', 'Mansion', 'Cabin', 'Bungalow', 'Penthouse', 'Chalet'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

// Generate random property image URLs
function generateRandomImage() {
  const imageLinks = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-49706801/original/be98672e-e143-466f-9b79-875d0adb659a.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-848615221887765979/original/041e0abd-3167-4f2b-9877-70d24da4a7ac.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-5742731/original/d2795540-51e9-4c13-a921-5c86ba0e45b4.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/95a205cc-6636-4ad3-b9fb-09bec115c4c0.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53724979/original/02886830-1ab0-4a9a-b9d0-a689785d39d8.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/58216f2b-2edf-415a-8e59-6325d7406111.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47935370/original/5f29138f-9d99-4036-8d02-09a21c4a1f65.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/2e15ea81-9fe7-4692-83e5-65a90a84f3d6.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/f03ec75d-e1f4-423f-af12-bd6d528c2a30.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-19304946/original/7da71266-000e-4ba0-872a-891e1737d02a.jpeg?im_w=720'
  ];

  const randomIndex = Math.floor(Math.random() * imageLinks.length);

  return imageLinks[randomIndex];
}

// Format date to display month and date
function formatDate(date) {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Generate the mock data array
const mockData = [];

for (let i = 0; i < 30; i++) {
  const category = filterCategories[getRandomNumber(0, filterCategories.length - 1)];
  const rating = getRandomNumber(1.5, 5);
  const formattedRating = rating === 5 ? rating.toFixed(2) : rating.toFixed(2);

  const startDate = getRandomDate(new Date(2023, 6, 1), new Date(2023, 6, 5));
  const endDate = getRandomDate(new Date(2023, 6, 6), new Date(2023, 6, 10));
  const availableNights = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  const mockObject = {
    id: i + 1,
    propertyTitle: generateRandomTitle(),
    propertyImage: generateRandomImage(),
    pricePerNight: getRandomNumber(50, 300),
    rating: formattedRating,
    hostname: `Host ${i + 1}`,
    availableNights: availableNights,
    category: category.title,
    liked: false,
  };

  mockData.push(mockObject);
}

export const mockDataArray = mockData;
