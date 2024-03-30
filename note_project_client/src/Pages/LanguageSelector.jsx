import React from "react";

const LanguageSelector = ({ onSelectLanguage }) => {
    return (
        <div className="language-selector">
            <select onChange={(e) => onSelectLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
            </select>
        </div>
    );
}
    export default LanguageSelector
