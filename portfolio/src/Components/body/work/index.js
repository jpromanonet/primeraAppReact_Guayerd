import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card.css";
import "./work.css";
import Separator from "../../common/separator/index";

function Work() {
    const data = WorkData;
    return(
        <div className="work">
            <Separator />
            <label className="section-title">Experiencia Laboral</label>
            <div className="work-list">
                {data.map((item) => {
                    return <WorkCard item={item} />;
                })}
            </div>
        </div>
    );
    
}

export default Work;