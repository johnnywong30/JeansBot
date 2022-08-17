const createMeeting = async (commandText) => {
    const params = commandText.trim().split(/\s+/)
    if (params.length < 2) throw `I am not that smart... Give me a time and a link to schedule a meeting or I'll kick you to the curb`
    const [time, link] = params
    // TODO: setup Notion connection here

}