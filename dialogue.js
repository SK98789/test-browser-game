const linearDialogue = [
    {
        steps: 1,
        content: "Your leg steps forward, shaking with nerves."
    },
    {
        steps: 2,
        content: "Another step."
    },
    {
        steps: 3,
        content: "And another."
    },
    {
        steps: 10,
        content: "You're making decent progress. Your nerves lessen as you get further from the place you awoke."
    },
    {
        steps: 15,
        content: "Your feet are hurting. What a shame you're in the middle of nowhere."
    },
    {
        steps: 20,
        content: "Is that... a path?"
    },
    {
        steps: 25,
        content: "As you make your way through the mud, you identify multiple, overlapping human(?) footprints. \n However, they all seemingly appear from nowhere. There is only one path forward."
    },
    {
        steps: 35,
        content: "The sinking feeling in your stomach has mostly faded, but something tells you not to look back."
    },
    {
        steps: 38,
        content: "There's a forest ahead!"
    },
    {
        steps: 45,
        content: "The tree line is close, but something is wrong."
    },
    {
        steps: 46,
        content: "................"
    },
    {
        steps: 47,
        content: "You're not alone...."
    },
    {
        steps: 48,
        content: "A low growl emanates from behind you"
    },
    {
        steps: 49,
        content: "Run.",
        eventList: ["chaseEvent"]
    },
    {
        steps: 100,
        content: "It's a miracle you ran through all that mud without slipping once. You barely stumble through the clearing in time when you see the beast has stopped in its tracks at the edge of the tree line. You hold your breath out of fear of attracting its attention, but the creature merely turns back the way it came. \n I suppose turning back isn't an option...",
    },
    {
        steps: 103,
        content: "**THUD** \n \n For all your luck avoiding almost certain death in the swamp, you immediately trip over a root in the forest path.",
        eventList: ["healthUnlockedEvent"]
        },
    {
        steps: 1000,
        content: "Placeholder text"
        }
]