'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NextBreadcrumb = ({ homeElement, containerClasses = '', listClasses = '', activeClasses = '', capitalizeLinks = false }) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return (
        <div>
            <ul className={`breadcrumb-container ${containerClasses}`}>
                <li className={`breadcrumb-item ${listClasses}`}>
                    <Link href='/'>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && <li className={`breadcrumb-separator ${listClasses}`}>{' > '}</li>}
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        let itemClasses = paths === href ? `${listClasses} breadcrumb-active ${activeClasses}` : listClasses;
                        let itemLink = capitalizeLinks ? link.charAt(0).toUpperCase() + link.slice(1) : link;
                        return (
                            <React.Fragment key={index} >
                                {index > 0 && <li className={`breadcrumb-separator ${listClasses}`}>{' > '}</li>}
                                <li className={`breadcrumb-item ${itemClasses}`}>
                                    <Link href={href}>{itemLink}</Link>
                                </li>
                            </React.Fragment>
                        );
                    })
                }
            </ul>
        </div>
    );
}

NextBreadcrumb.propTypes = {
    homeElement: PropTypes.node.isRequired,
    containerClasses: PropTypes.string,
    listClasses: PropTypes.string,
    activeClasses: PropTypes.string,
    capitalizeLinks: PropTypes.bool
}

export default NextBreadcrumb;
