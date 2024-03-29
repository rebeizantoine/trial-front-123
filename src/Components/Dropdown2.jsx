import React, { useState } from "react";
import "../Styles/dropdown.css";

const Dropdown2 = ({ onNationalityChange }) => {
  const [nationalityEmployer, setNationalityEmployer] = useState("");
  const handleNationalityChange = (e) => {
    const selectedNationality = e.target.value;
    setNationalityEmployer(selectedNationality);
    // Pass the selected location to the parent component
    onNationalityChange(selectedNationality);
  };

  return (
    <div>
      <select
        className="form-select"
        id="nationality"
        name="nationality"
        onChange={handleNationalityChange}
      >
        <option>--- Select Nationality ---</option>{" "}
        <option value="BE">Belgian</option>
        <option value="BZ">Belizean</option>
        <option value="BJ">Beninese</option>
        <option value="BM">Bermudian</option>
        <option value="BT">Bhutanese</option>
        <option value="BO">Bolivian</option>
        <option value="BQ">Bonairean</option>
        <option value="BA">Bosnian and Herzegovinian</option>
        <option value="BW">Motswana (Botswanan)</option>
        <option value="BV">Bouvet Islander</option>
        <option value="BR">Brazilian</option>
        <option value="IO">British Indian Ocean Territory</option>
        <option value="BN">Bruneian</option>
        <option value="BG">Bulgarian</option>
        <option value="BF">Burkinabe</option>
        <option value="BI">Burundian</option>
        <option value="KH">Cambodian</option>
        <option value="CM">Cameroonian</option>
        <option value="CA">Canadian</option>
        <option value="CV">Cape Verdean</option>
        <option value="KY">Caymanian</option>
        <option value="CF">Central African</option>
        <option value="TD">Chadian</option>
        <option value="CL">Chilean</option>
        <option value="CN">Chinese</option>
        <option value="CX">Christmas Islander</option>
        <option value="CC">Cocos Islander</option>
        <option value="CO">Colombian</option>
        <option value="KM">Comoran</option>
        <option value="CG">Congolese</option>
        <option value="CD">Congolese</option>
        <option value="CK">Cook Islander</option>
        <option value="CR">Costa Rican</option>
        <option value="CI">Ivorian</option>
        <option value="HR">Croatian</option>
        <option value="CU">Cuban</option>
        <option value="CW">Curacaoan</option>
        <option value="CY">Cypriot</option>
        <option value="CZ">Czech</option>
        <option value="DK">Danish</option>
        <option value="DJ">Djiboutian</option>
        <option value="DM">Dominican</option>
        <option value="DO">Dominican</option>
        <option value="EC">Ecuadorian</option>
        <option value="EG">Egyptian</option>
        <option value="SV">Salvadoran</option>
        <option value="GQ">Equatorial Guinean</option>
        <option value="ER">Eritrean</option>
        <option value="EE">Estonian</option>
        <option value="ET">Ethiopian</option>
        <option value="FK">Falkland Islander</option>
        <option value="FO">Faroese</option>
        <option value="FJ">Fijian</option>
        <option value="FI">Finnish</option>
        <option value="FR">French</option>
        <option value="GF">French Guianese</option>
        <option value="PF">French Polynesian</option>
        <option value="TF">French Southern Territories</option>
        <option value="GA">Gabonese</option>
        <option value="GM">Gambian</option>
        <option value="GE">Georgian</option>
        <option value="DE">German</option>
        <option value="GH">Ghanaian</option>
        <option value="GI">Gibraltarian</option>
        <option value="GR">Greek</option>
        <option value="GL">Greenlandic</option>
        <option value="GD">Grenadian</option>
        <option value="GP">Guadeloupean</option>
        <option value="GU">Guamanian</option>
        <option value="GT">Guatemalan</option>
        <option value="GG">Channel Islander</option>
        <option value="GN">Guinean</option>
        <option value="GW">Guinea-Bissauan</option>
        <option value="GY">Guyanese</option>
        <option value="HT">Haitian</option>
        <option value="HM">Heard Islander and McDonald Islander</option>
        <option value="VA">Vatican City State</option>
        <option value="HN">Honduran</option>
        <option value="HK">Hong Konger</option>
        <option value="HU">Hungarian</option>
        <option value="IS">Icelander</option>
        <option value="IN">Indian</option>
        <option value="ID">Indonesian</option>
        <option value="IR">Iranian</option>
        <option value="IQ">Iraqi</option>
        <option value="IE">Irish</option>
        <option value="IM">Manx</option>
        <option value="IL">Israeli</option>
        <option value="IT">Italian</option>
        <option value="JM">Jamaican</option>
        <option value="JP">Japanese</option>
        <option value="JE">Channel Islander</option>
        <option value="JO">Jordanian</option>
        <option value="KZ">Kazakhstani</option>
        <option value="KE">Kenyan</option>
        <option value="KI">I-Kiribati</option>
        <option value="KP">North Korean</option>
        <option value="KR">South Korean</option>
        <option value="XK">Kosovar</option>
        <option value="KW">Kuwaiti</option>
        <option value="KG">Kyrgyzstani</option>
        <option value="LA">Laotian</option>
        <option value="LV">Latvian</option>
        <option value="LB">Lebanese</option>
        <option value="LS">Mosotho (Lesothan)</option>
        <option value="LR">Liberian</option>
        <option value="LY">Libyan</option>
        <option value="LI">Liechtensteiner</option>
        <option value="LT">Lithuanian</option>
        <option value="LU">Luxembourger</option>
        <option value="MO">Macanese</option>
        <option value="MK">Macedonian</option>
        <option value="MG">Malagasy</option>
        <option value="MW">Malawian</option>
        <option value="MY">Malaysian</option>
        <option value="MV">Maldivian</option>
        <option value="ML">Malian</option>
        <option value="MT">Maltese</option>
        <option value="MH">Marshallese</option>
        <option value="MQ">Martinican</option>
        <option value="MR">Mauritanian</option>
        <option value="MU">Mauritian</option>
        <option value="YT">Mahoran</option>
        <option value="MX">Mexican</option>
        <option value="FM">Micronesian</option>
        <option value="MD">Moldovan</option>
        <option value="MC">Monacan</option>
        <option value="MN">Mongolian</option>
        <option value="ME">Montenegrin</option>
        <option value="MS">Montserratian</option>
        <option value="MA">Moroccan</option>
        <option value="MZ">Mozambican</option>
        <option value="MM">Burmese</option>
        <option value="NA">Namibian</option>
        <option value="NR">Nauruan</option>
        <option value="NP">Nepali</option>
        <option value="NL">Dutch</option>
        <option value="AN">Dutch Antillean</option>
        <option value="NC">New Caledonian</option>
        <option value="NZ">New Zealander</option>
        <option value="NI">Nicaraguan</option>
        <option value="NE">Nigerien</option>
        <option value="NG">Nigerian</option>
        <option value="NU">Niuean</option>
        <option value="NF">Norfolk Islander</option>
        <option value="MP">Northern Mariana Islander</option>
        <option value="NO">Norwegian</option>
        <option value="OM">Omani</option>
        <option value="PK">Pakistani</option>
        <option value="PW">Palauan</option>
        <option value="PS">Palestinian</option>
        <option value="PA">Panamanian</option>
        <option value="PG">Papua New Guinean</option>
        <option value="PY">Paraguayan</option>
        <option value="PE">Peruvian</option>
        <option value="PH">Filipino</option>
        <option value="PN">Pitcairn Islander</option>
        <option value="PL">Polish</option>
        <option value="PT">Portuguese</option>
        <option value="PR">Puerto Rican</option>
        <option value="QA">Qatari</option>
        <option value="RE">Reunionese</option>
        <option value="RO">Romanian</option>
        <option value="RU">Russian</option>
        <option value="RW">Rwandan</option>
        <option value="BL">Saint Barthelemy Islander</option>
        <option value="SH">Saint Helenian</option>
        <option value="KN">Kittitian and Nevisian</option>
        <option value="LC">Saint Lucian</option>
        <option value="MF">Saint Martin Islander</option>
        <option value="PM">Saint Pierre and Miquelon Islander</option>
        <option value="VC">Saint Vincentian</option>
        <option value="WS">Samoan</option>
        <option value="SM">Sammarinese</option>
        <option value="ST">Sao Tomean</option>
        <option value="SA">Saudi Arabian</option>
        <option value="SN">Senegalese</option>
        <option value="RS">Serbian</option>
        <option value="CS">Serbian and Montenegrin</option>
        <option value="SC">Seychellois</option>
        <option value="SL">Sierra Leonean</option>
        <option value="SG">Singaporean</option>
        <option value="SX">Sint Maartener</option>
        <option value="SK">Slovak</option>
        <option value="SI">Slovenian</option>
        <option value="SB">Solomon Islander</option>
        <option value="SO">Somali</option>
        <option value="ZA">South African</option>
        <option value="GS">
          South Georgia and the South Sandwich Islander
        </option>
        <option value="SS">South Sudanese</option>
        <option value="ES">Spanish</option>
        <option value="LK">Sri Lankan</option>
        <option value="SD">Sudanese</option>
        <option value="SR">Surinamese</option>
        <option value="SJ">Svalbard Islander and Jan Mayen Islander</option>
        <option value="SZ">Swazi</option>
        <option value="SE">Swedish</option>
        <option value="CH">Swiss</option>
        <option value="SY">Syrian</option>
        <option value="TW">Taiwanese</option>
        <option value="TJ">Tajikistani</option>
        <option value="TZ">Tanzanian</option>
        <option value="TH">Thai</option>
        <option value="TL">Timorese</option>
        <option value="TG">Togolese</option>
        <option value="TK">Tokelauan</option>
        <option value="TO">Tongan</option>
        <option value="TT">Trinidadian and Tobagonian</option>
        <option value="TN">Tunisian</option>
        <option value="TR">Turkish</option>
        <option value="TM">Turkmen</option>
        <option value="TC">Turks and Caicos Islander</option>
        <option value="TV">Tuvaluan</option>
        <option value="UG">Ugandan</option>
        <option value="UA">Ukrainian</option>
        <option value="AE">Emirati</option>
        <option value="GB">British</option>
        <option value="US">American</option>
        <option value="UM">United States Minor Outlying Islander</option>
        <option value="UY">Uruguayan</option>
        <option value="UZ">Uzbekistani</option>
        <option value="VU">Ni-Vanuatu</option>
        <option value="VE">Venezuelan</option>
        <option value="VN">Vietnamese</option>
        <option value="VG">British Virgin Islander</option>
        <option value="VI">U.S. Virgin Islander</option>
        <option value="WF">Wallis and Futuna Islander</option>
        <option value="EH">Sahrawi</option>
        <option value="YE">Yemeni</option>
        <option value="ZM">Zambian</option>
        <option value="ZW">Zimbabwean</option>
      </select>
    </div>
  );
};

export default Dropdown2;
