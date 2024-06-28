"use client"
import React from "react";
import DOMPurify from "dompurify";

export default function Costs({data}){

    const unpurified_include = data.include_content;
    const unpurified_exclude = data.exclude_content;

    const updated_include = DOMPurify.sanitize(unpurified_include)
    const updated_exclude = DOMPurify.sanitize(unpurified_exclude)


    return (
        <div className="trip-detail tour_details_boxed" id="cost">
            <div className="row x-gap-130 y-gap-20">
            <div className="col-lg-12">
            <h2>Cost Include</h2>
            <div className="include">
            <span dangerouslySetInnerHTML={{ __html: updated_include}}></span>
            </div>
            </div>
            <div className="col-lg-12">
            <h2>Cost Exclude</h2>
            <div className="exclude">
            <span dangerouslySetInnerHTML={{ __html: updated_exclude}}></span>
            </div>
            </div>
            </div>  
            </div>
    )
}