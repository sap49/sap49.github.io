import React from "react"

export default function ProtectedEvent({event = null, events = null, userData, children}) {

    if (event) {
        const eventData  = userData[event];
        let isInvited = false;

        for (let prop in eventData) {
            if (prop === "invited") {
                isInvited = eventData[prop]
                break;
            }
        }
        console.log(event, eventData);

        if (isInvited) {
            return children;
        } else {
            return null;
        }
    } else if (events) { // label only
        let count = 0;
        for (event in events) {
            const eventData  = userData[events[event]];
            for (let prop in eventData) {
                if (prop === "invited") {
                    count = eventData[prop] ? count+1 : count;
                }
            }
        }
        if (count > 0) {
            return children;
        } else {
            return null;
        }
    }
}