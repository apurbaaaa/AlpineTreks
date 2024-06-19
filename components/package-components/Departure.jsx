import React, { useState, useEffect } from 'react';

const Departure = ({ data }) => {
    if (!data || !data.departures) {
        return <div>No departure data available</div>;
    }

    const { year_month = [], dates = {} } = data.departures;

    const formatTabId = (year, month) => {
        const monthIndex = new Date(`${month} 1, ${year}`).getMonth() + 1;
        return `${year}-${monthIndex.toString().padStart(2, '0')}`;
    };

    // Ensure the first element in year_month is used as the initial active tab
    const initialYearMonth = year_month.length > 0 ? formatTabId(year_month[0]?.year, year_month[0]?.month) : '';

    const [activeTab, setActiveTab] = useState(initialYearMonth);
    const [activePane, setActivePane] = useState('pane1');

    useEffect(() => {
        if (initialYearMonth) {
            setActiveTab(initialYearMonth);
        }
    }, [initialYearMonth]);

    const openTab = (tab) => setActiveTab(tab);
    const openPane = (pane) => setActivePane(pane);

    

    const formattedDates = year_month.reduce((acc, { year, month }) => {
        const formattedMonth = formatTabId(year, month);
        acc[formattedMonth] = dates[formattedMonth];
        return acc;
    }, {});

    return (
        <div className="trip-detail tour_details_boxed departure tabs -tourSingle js-tabs" id="departure">
            <div className="fixed-departure-tab">
                <div>
                    <h2>Fixed Departure</h2>
                </div>
                <div className="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
                    <div className="col-auto">
                        <button
                            className={`tabs__button text-16 md:text-20 fw-700 js-tabs-button ${activePane === 'pane1' ? 'is-tab-el-active' : ''}`}
                            onClick={() => openPane('pane1')}
                        >
                            <i className="fa-solid fa-users-medical"></i> Group Departure
                        </button>
                    </div>
                    <div className="col-auto">
                        <button
                            className={`tabs__button text-16 md:text-20 fw-700 js-tabs-button ${activePane === 'pane2' ? 'is-tab-el-active' : ''}`}
                            onClick={() => openPane('pane2')}
                        >
                            <i className="fa-solid fa-user"></i> Private Departure
                        </button>
                    </div>
                </div>
            </div>
            <div className="tabs__content pt-40 js-tabs-content">
                <div className={`tabs__pane -tab-item-1 ${activePane === 'pane1' ? 'is-tab-el-active' : ''}`}>
                    {year_month.length > 0 ? (
                        <div className="tab-container w-100" style={{width : '100%'}}>
                            <div className="tab-container-list">
                                {year_month.map(({ year, month }) => (
                                    <button
                                        key={formatTabId(year, month)}
                                        id={`${formatTabId(year, month)}-btn`}
                                        className={`tab-btn ${activeTab === formatTabId(year, month) ? 'active' : ''}`}
                                        onClick={() => openTab(formatTabId(year, month))}
                                    >
                                        <span>{month}</span>
                                        <span>{year}</span>
                                    </button>
                                ))}
                            </div>
                            <div id='tab1' className='tab-content'>

                            </div>
                            <div className='departure'>
                            
                                {formattedDates[activeTab] ? (
                                    formattedDates[activeTab].map(({ date, price, availability }) => (
                                        <div className="depature-section">
                                        <div key={date}>
                                            <div className="date">
                                                <div className="time font-lg-bold" data-title="Package Dates">
                                                    {date}
                                                </div>
                                                <div className="place" data-title="Package Place">
                                                    Starts/Ends: Kathmandu
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span>Price</span>
                                                <span className="font-lg-bold" data-title="Package Price">US${price}</span>
                                            </div>
                                        </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No dates available for the selected month.</div>
                                )}
                            </div> 
                            
                        </div>
                    ) : (
                        <div>No departure dates available.</div>
                    )}
                </div>
                <div className={`tabs__pane -tab-item-2 ${activePane === 'pane2' ? 'is-tab-el-active' : ''}`}>
                    {/* Add content for private departures here */}
                </div>
            </div>
            <div className="submit-button text-center">
                <a className="button -sm -dark-1 col-lg-4 col-12 bg-accent-1 text-white mt-20 w-auto" href="#">Customize This Trip</a>
            </div>
        </div>
    );
};

export default Departure;
