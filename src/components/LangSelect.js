import React from 'react';

const LangSelect = ({language, langs, handleLangChange}) => {
  const listOfLangs = langs.map((lang, index) =>  <option key={index} value={lang.languageCode}>{lang.Language}</option>)
  return (
    <div className="langSelect">
      <label htmlFor="langs">Choose your language: </label>
      <select name="langs" id="langs" value={language} onChange={handleLangChange}>
        {listOfLangs}
      </select>
    </div>
  )
}

export default LangSelect;
