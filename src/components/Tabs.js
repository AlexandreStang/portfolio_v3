import React, {useState} from "react";

// categories: list of categories
// onSelectCategory: callback function to notify parent when a tab is clicked
// defaultCategory: category selected by default
// allCategory: name of tab for all categories
const Tabs = ({categories, onSelectCategory, defaultCategory, categoryCounts}) => {

    // State for active tab
    const [activeTab, setActiveTab] = useState(defaultCategory);

    // Handle tab clicks; updates the activeTab state and informs the parent component
    const handleTabClick = (category) => {
        setActiveTab(category);
        onSelectCategory(category);
    };

    return (
        <div className="portfolio-description" data-aos="content-text">
            {categories.map((category, i) =>
                <React.Fragment key={category}>
                    <span className={`text-link ${activeTab === category ? "active" : ""}`}
                          onClick={() => handleTabClick(category)}>
                        {category + " (" + categoryCounts[category] + ")"}
                    </span>
                    {i + 1 === categories.length ? "" : " / "}
                </React.Fragment>
            )}
        </div>
    );
};

export default Tabs;