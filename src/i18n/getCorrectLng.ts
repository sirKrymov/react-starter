export const getCorrectLng = (value: string, defaultLng: string): string => {
  let lng: string;

  switch (value) {
    case 'GB':
      lng = 'en';
      break;

    case 'DE':
      lng = 'de';
      break;

    default:
      lng = defaultLng;
      break;
  }

  return lng;
};
