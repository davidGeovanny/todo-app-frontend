import React from "react";
import { NotesSection } from "../notes/NotesSection";

export const ActivityNotes = ({ show }) => {
    return (
        <div className={`tab-pane fadeIn in ${show && "show active"}`}>
            <div className="row">
                <div className="col-12">
                    <NotesSection />
                </div>
            </div>
        </div>
    );
};
