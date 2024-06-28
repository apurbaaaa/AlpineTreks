"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Departure = ({ data }) => {
    if (!data || !data.departures) {
        return <div>No departure data available</div>;
    }

    const { year_month = [], dates = {} } = data.departures;
    const [private_year_month, setPrivate_year_month] = useState(null);

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

    const noPrivateDepartures = private_year_month === null || private_year_month.length === 0;

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
                        <div className="tab-container w-100" style={{ width: '100%' }}>
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
                            <div id="tab1" className="tab-content"></div>
                            <div className="departure">
                                {formattedDates[activeTab] ? (
                                    formattedDates[activeTab].map(({ date, price, availability }) => (
                                        <div key={date} className="depature-section">
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
                                            <div className="submit-button">
                                                <form action="/booking" method="POST">
                                                    <input type="hidden" name="_token" value="bBphzNCVIqfk89NtzdBgXyHGTW2aSubHVrYW3yq6" autoComplete="off" />
                                                    <input type="hidden" name="package" value="Annapurna Base Camp Trek" />
                                                    <input type="hidden" name="package_url" value="https://mountaintrekkingnepal.com/package/annapurna-base-camp-trek" />
                                                    <input type="hidden" name="date" value={date} />
                                                    <input type="hidden" name="price" value={price} />
                                                    <Link href={{
                                                        pathname: '/booking',
                                                        query: { title: data.title }
                                                    }}>
                                                        <button type="submit" className="button -sm -dark-1 col-12 border-1">Book Now</button>
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No group dates available for the selected month.</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>No group departure dates available.</div>
                    )}
                </div>
                <div className={`tabs__pane -tab-item-2 ${activePane === 'pane2' ? 'is-tab-el-active' : ''}`}>
                    {private_year_month && private_year_month.length > 0 ? (
                        <div className="tab-container w-100" style={{ width: '100%' }}>
                            <div className="tab-container-list">
                                {private_year_month.map(({ year, month }) => (
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
                            <div id="tab1" className="tab-content"></div>
                            <div className="departure">
                                {formattedDates[activeTab] ? (
                                    formattedDates[activeTab].map(({ date, price, availability }) => (
                                        <div key={date} className="depature-section">
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
                                            <div className="submit-button">
                                                <form action="/booking" method="POST">
                                                    <input type="hidden" name="_token" value="bBphzNCVIqfk89NtzdBgXyHGTW2aSubHVrYW3yq6" autoComplete="off" />
                                                    <input type="hidden" name="package" value="Annapurna Base Camp Trek" />
                                                    <input type="hidden" name="package_url" value="https://mountaintrekkingnepal.com/package/annapurna-base-camp-trek" />
                                                    <input type="hidden" name="date" value={date} />
                                                    <input type="hidden" name="price" value={price} />
                                                    <Link href={{
                                                        pathname: '/booking',
                                                        query: { title: data.title }
                                                    }}>
                                                        <button type="submit" className="button -sm -dark-1 col-12 border-1">Book Now</button>
                                                    </Link>
                                                </form>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No private dates available for the selected month.</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>No private departure dates available.</div>
                    )}
                </div>
            </div>
            {(activePane === 'pane2' && noPrivateDepartures) || activePane !== 'pane2' ? (
                <div className="submit-button text-center">
                    <a className="button -sm -dark-1 col-lg-4 col-12 bg-accent-1 text-white mt-20 w-auto" href="#">Customize This Trip</a>
                </div>
            ) : null}
        </div>
    );
};

export default Departure;
