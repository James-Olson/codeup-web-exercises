"use strict";

function dateOfLastCommit(ghUsername) {
    return fetch(`https://api.github.com/users/${ghUsername}/events/public`, {
        headers: {
            'Authorization': `token ${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}`
        }
    })
        .then(response => response.json())
        .then(events => {
            let pushEvents = events.filter(event => event.type === 'PushEvent')
            return pushEvents[0].created_at
        });
}

dateOfLastCommit("Jimolson-git").then(data => console.log(new Date(data).toDateString()));