import { useState } from "react";
import axios from "axios";
export default function Inputs() {
  const africa = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cape Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Democratic Republic of the Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini (Swaziland)",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Republic of the Congo",
    "Rwanda",
    "São Tomé and Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  const asia = [
    "Japan",
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar (Burma)",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste (East Timor)",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ];

  const europe = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kazakhstan",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];

  const northAmerica = [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "United States",
  ];

  const southAmerica = [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
  ];

  const australiaOceania = [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ];

  const antarctica = [
    "Antarctica", // No countries, only territorial claims by various nations
  ];

  function searchByCountryName(countryName) {
    axios
      .get(`https://countrywise.p.rapidapi.com/name/america`, {
        headers: {
          "x-rapidapi-key":
            "6516279df6msh884dce89ce087c0p10ef23jsn3914ca0e92f6",
          "x-rapidapi-host": "countrywise.p.rapidapi.com",
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  //   function searchByContinent() {
  //     axios
  //       .get(
  //         "https://geography4.p.rapidapi.com/apis/geography/v1/country/continent/Asia/?sortOrder=asc&limit=10&sortBy=name&offset=1",
  //         {
  //           params: {
  //             exactMatch: "false",
  //             limit: "10",
  //             includeNativeName: "false",
  //             sortOrder: "asc",
  //             sortBy: "name",
  //             offset: "1",
  //           },
  //           headers: {
  //             "x-rapidapi-key":
  //               "6516279df6msh884dce89ce087c0p10ef23jsn3914ca0e92f6",
  //             "x-rapidapi-host": "geography4.p.rapidapi.com",
  //           },
  //         }
  //       )
  //       .then((res) => console.log(res.data))
  //       .catch((error) => console.log(error));
  //   }

  const [continent, setContinent] = useState(asia);

  function changeContinent(event) {
    if (event.target.value === "asia") setContinent(asia);
    else if (event.target.value === "africa") setContinent(africa);
    else if (event.target.value === "europe") setContinent(europe);
    else if (event.target.value === "northAmerica") setContinent(northAmerica);
    else if (event.target.value === "southAmerica") setContinent(southAmerica);
    else if (event.target.value === "australiaOceania")
      setContinent(australiaOceania);
    else setContinent(antarctica);
  }

  let countries = continent.map((country, index) => {
    return <option key={index}>{country}</option>;
  });

  //   const [country, setCountry] = useState([]);

  //   axios
  //     .get(
  //       "https://geography4.p.rapidapi.com/apis/geography/v1/country/continent/Asia/?sortOrder=asc&limit=10&sortBy=name&offset=1",
  //       {
  //         params: {
  //           exactMatch: "false",
  //           limit: "10",
  //           includeNativeName: "false",
  //           sortOrder: "asc",
  //           sortBy: "name",
  //           offset: "1",
  //         },
  //         headers: {
  //           "x-rapidapi-key":
  //             "6516279df6msh884dce89ce087c0p10ef23jsn3914ca0e92f6",
  //           "x-rapidapi-host": "geography4.p.rapidapi.com",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setCountry(res.data);
  //     })
  //     .catch((error) => console.log(error));

  //   let displayCountryInformation = country.map((item, index) => {
  //     return (
  //       <div key={index} className="boxShadow flex flex-col ">
  //         <img
  //           class="w-full h-48"
  //           src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
  //           alt="Sunset in the mountains"
  //         />
  //         <div className="flex flex-col items-start p-4 gap-y-1">
  //           <span>Name : {item.name.common}</span>
  //           <span>capital :</span>
  //           <span>languages :</span>
  //           <span>population :</span>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <div className="flex flex-col items-center">
      {/* select Continents */}
      <div className="flex flex-row justify-center items-center gap-x-2 py-3">
        <div className="relative h-14 w-72 min-w-[200px]">
          <select
            onChange={changeContinent}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="europe">Europa</option>
            <option value="northAmerica">North-america</option>
            <option value="southAmerica">South-america</option>
            <option value="australiaOceania">Australia-Oceania</option>
            <option value="antarctica">Antarctica</option>
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            continent
          </label>
        </div>
        {/* select countries */}
        <div class="relative h-14 w-72 min-w-[200px]">
          <select
            onChange={(e) => searchByCountryName(e.target.value)}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            <option selected disabled>
              select a country
            </option>
            {countries}
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Country
          </label>
        </div>
        <span>OR</span>
        {/* Search your country */}
        <div class="w-80 max-w-80">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Country name"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="w-full max-w-screen-xl p-5 sm:p-10 md:p-16 flex ">
        <div class="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {/* card start */}
          {/* {displayCountryInformation} */}
          {/* card end */}
        </div>
      </div>
    </div>
  );
}
