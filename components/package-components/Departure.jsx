import React, { useState, useEffect } from 'react';

const Departure = ({ data }) => {
    if (!data || !data.departures) {
        return <div>No departure data available</div>;
    }

    const { year_month, dates } = data.departures;

    const initialYearMonth = year_month[1] ? `${year_month[0].year}-${year_month[0].month}` : '';
    const [activeTab, setActiveTab] = useState(initialYearMonth);
    const [activePane, setActivePane] = useState('pane1');

    useEffect(() => {
        if (initialYearMonth) {
            setActiveTab(initialYearMonth);
        }
    }, [initialYearMonth]);

    const openTab = (tab) => {
        setActiveTab(tab);
    };

    const openPane = (pane) => {
        setActivePane(pane);
    };

    const formatTabId = (year, month) => `${year}-${month}`;

    return (
        <div className="trip-detail tour_details_boxed depature tabs -tourSingle js-tabs" id="depature">
            <div className="fixed-depature-tab">
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
            <div className="">
                <div className="tabs__content pt-40 js-tabs-content">
                    <div className={`tabs__pane -tab-item-1 ${activePane === 'pane1' ? 'is-tab-el-active' : ''}`}>
                        <div className="tab-container w-100">
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
                            {year_month.map(({ year, month }) => (
                                <div
                                    key={formatTabId(year, month)}
                                    id={formatTabId(year, month)}
                                    className={`tab-content ${activeTab === formatTabId(year, month) ? 'active' : ''}`}
                                >
                                    {dates[`${year}-${month}`] &&
                                        dates[`${year}-${month}`].map(({ date, price }) => (
                                            <DepartureSection key={date} date={date} price={price} />
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`tabs__pane -tab-item-2 ${activePane === 'pane2' ? 'd-none' : ''}`}>
                    </div>
                </div>
            </div>
            <div className="submit-button text-center">
                <a className="button -sm -dark-1 col-lg-4 col-12 bg-accent-1 text-white mt-20 w-auto" href="#">Customize This Trip</a>
            </div>
        </div>
    );
};

const DepartureSection = ({ date, price }) => (
    <div className="depature">
        <div className="depature-section" data-title={date}>
            <div className="date">
                <div className="time font-lg-bold" data-title="Package Dates">
                    {new Date(date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
                <div className="place" data-title="Package Place">
                    Starts/Ends: Kathmandu
                </div>
            </div>
            <div className="price">
                <span>Price</span> <span className="font-lg-bold" data-title="Package Price">US$ {price}</span>
            </div>
            <div className="book">
                <div className="submit-button">
                    <form action="https://mountaintrekkingnepal.com/booking" method="POST">
                        <input type="hidden" name="_token" value="bBphzNCVIqfk89NtzdBgXyHGTW2aSubHVrYW3yq6" />
                        <input type="hidden" name="package" value="Annapurna Base Camp Trek" />
                        <input type="hidden" name="package_url" value="https://mountaintrekkingnepal.com/package/annapurna-base-camp-trek" />
                        <input type="hidden" name="date" value={date} />
                        <input type="hidden" name="price" value={price} />
                        <button type="submit" className="button -sm -dark-1 col-12 border-1">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Departure;
