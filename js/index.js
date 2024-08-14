let output = document.querySelector(".output");
let currienciesMenu = document.querySelectorAll("select");
let switchBtn = document.querySelector(".btn.switch");
let convertBtn = document.querySelector(".btn.convert");
let fromSelect = document.querySelector(".from");
let toSelect = document.querySelector(".to");
let fromFlag = document.querySelector('.from-flag');
let toFlag = document.querySelector('.to-flag');
const data = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};
let languagesEntries = Object.entries(data);

currienciesMenu.forEach((menu) => {
  /*Change the flag image when the select value is changed  */
  menu.addEventListener('change',(e)=>{
    let flagCode = e.target.value.slice(0,2);
    let flagImage = `https://flagsapi.com/${flagCode}/shiny/32.png`;
    menu.classList.contains('from') ? fromFlag.setAttribute('src',flagImage) : toFlag.setAttribute('src',flagImage);  
  })
  /*Adding the currencies to the selects */
  languagesEntries.map((lang) => {
    menu.innerHTML += `<option class="language" value="${lang[0]}">${lang[1]}</option>`;
  });
});
switchBtn.addEventListener("click", () => {
  /*Switch Currencies and flags */
  let fromCur = fromSelect.value;
  let toCur = toSelect.value;
  let fromFlagSrc = fromFlag.getAttribute('src');
  let toFlagSrc = toFlag.getAttribute('src');
  fromSelect.value = toCur;
  toSelect.value = fromCur;
  fromFlag.setAttribute('src',toFlagSrc);
  toFlag.setAttribute('src',fromFlagSrc);
});

convertBtn.addEventListener("click", () => {
  /*Get the currencies and fetch the api to get the conversion rate */
  let inputValue = document.querySelector("input").value.trim();
  let value = !isNaN(inputValue) && inputValue !=''? inputValue : 1;
  let fromCur = fromSelect.value;
  let toCur = toSelect.value;
  output.innerHTML = "Converting...";
  fetch(
    ` https://v6.exchangerate-api.com/v6/cc955bbb35b289be9b24f3c4/latest/${fromCur}`
  )
    .then((response) => response.json())
    .then((data) => {
      let conversionRate = data.conversion_rates[`${toCur}`];
      let total = value * conversionRate;
      output.innerHTML = `<p class="output">${value} ${fromCur} =  ${parseFloat(total.toFixed(4))} ${toCur}</p>`
    }).catch((error)=>{
      output.innerHTML = `<p class="output error">${error.message}</p>`
    });
});
