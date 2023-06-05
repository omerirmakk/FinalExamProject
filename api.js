let countryData = [];

export async function fetchCountryData() {
  if (countryData.length === 0) {
    try {
      const response = await fetch('https://localhost:44314/api/Turkey');
      if (!response.ok) {
        throw new Error('Maalesef data fetch edilemedi');
      }
      countryData = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export function getCountryData(countryName) {
  const filteredData = countryData.filter(
    (country) => country.Title === countryName
  );
  return filteredData;
}
