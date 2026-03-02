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
        eventList: ["stageTwoEvent"]
    },
    {
        steps: 103,
        content: "**THUD** \n \n For all your luck avoiding almost certain death in the swamp, you immediately trip over a root in the forest path.",
        eventList: ["healthUnlockedEvent"]
    },
    {
        steps: 110,
        content: " Up ahead, you spot a small cottage nestled within the thicket to your left of the path. The walls are well-worn and the roof has seen better days, but there are fresh footsteps in the dirt path leading to the house. \n\nThankfully, the cottage does not appear to be made of gingerbread.",
        eventList: ["cottageOptionalEvent"]
    },
    {
        steps: 111,
        content: "You continue on your journey."
    },
    {
        steps: 1000,
        content: "Placeholder text"
    }
]

const COTTAGE_DIALOGUE = [
    //0
    {
        text: "As you walk towards the house, you notice a blue smoke flowing from the chimney. Someone is clearly home.",
        opts: [
            {
                buttonText : "continue",
                directTo: 1
            }
        ]
    },
    //1
    {
        text: "Upon further inspection, you see what looks like blood on the rustic porch you are approaching.",
        opts: [
            {
                buttonText : "continue",
                directTo: 2
            },
            {
                buttonText : "turn back",
                directTo: 3
            }
        ]
    },
    //2
    {
        text: "Now on the porch, you hear a screaming whistle in the house. Heavy footsteps, plus a loud voice that you can only assume is spilling a long stream of expletives in a language you don't understand.",
        opts: [
            {
                buttonText : "knock",
                directTo: 4
            },
            {
                buttonText : "turn back",
                directTo: 3
            }
        ]
    },
    //3
    {
        text: "On second thought, the house seems perfectly fine to be left alone. You have returned to the path.",
        opts: []
    },
    //4
    {
        text: "The screaming whistle stops after a second and you hear the footsteps head towards the door.",
        opts: [
            {
                buttonText : "wait",
                directTo: 5
            },
            {
                buttonText : "turn back",
                directTo: 3
            }
        ]
    },
    //5
    {
        text: "Suddenly, the door swings open, and an elderly woman looks up at your face. She looks deeply disappointed to see you. \n\n\"Well??? What do you want?\" she asks with a raised brow.",
        opts: [
            {
                buttonText : "\'I'm so sorry, but I just woke up in this swamp nearby and I don't know how I got there. Could you help me?\"",
                directTo: 6 
            },
            {
                buttonText : "\"Who are you?\"",
                directTo: 7
            },
            {
                buttonText : "Scream \"WITCH\" at the top of your lungs and start to hyperventilate on the ground in the fetal position.",
                directTo: 8
            }
        ]
    },
    //6
    {
        text: "The woman sighs heavily. \n \"Another one?\" she asks to seemingly no one. \n After standing in silence for an uncomfortable 30 seconds, the woman finally finishes deliberating. \n \"Alright, kid, I'll help ya out, but you'll need to answer some questions for me first. Ready?\"",
        opts: [
            {
                buttonText : "Ok",
                directTo: 10
            }
        ]
    },
    //7
    {
        text: "\"EXCUSE ME??? I *LIVE* HERE. Do you make a habit of showing up unannounced to women's homes demanding to know personal information about them???\"",
        opts: [
            {
                buttonText: "Apologize profusely and beg for her forgiveness",
                directTo: 9
            }
        ]
    },
    //8
    {
        text: "The woman looks at you, thoroughly unimpressed. \n\n \"You're not even worth my time,\" she says flatly. \"Now fuck off, I have no interest in helping idiots.\" \n\nYou blink, and suddenly you find yourself back on the path at the exact place where you decided to approach the hut. \n\nWhere the cottage once stood, you see nothing but trees and brambles. \n\nAlso, your shoes are gone.",
        opts: [],
        eventList: ["shoeTheft"]
    },
    //9
    {
        text: "Although visibly annoyed, she seems to calm down with your pathetic groveling.",
        opts: [
            {
                buttonText: "\"I'm so sorry, but I just woke up in this swamp nearby and I don't know how I got there. Could you help me?\"",
                directTo: 6
            }
        ]
    },
    //10
    {
        text: "\"Alright, first question is the easiest: \n\n 'I am tall when I am young and I am short when I am old. What am I?' \"",
        opts: [
            {
                buttonText: "A candle",
                directTo: 11
            },
            {
                buttonText: "You",
                directTo: 12
            },
            {
                buttonText: "I'm not in the right head space to answer that",
                directTo: 13
            }
        ]
    },
    //11
    {
        text: "\"That's an acceptable, albeit boring response\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 14
            }
        ]
    },
    //12
    {
        text: "\"Hah! I'll accept that answer\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 14
            }
        ]
    },
    //13
    {
        text: "\"Wow, this was supposed to be the easy question...\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 15
            }
        ]
    },
    //14
    {
        text: "\"Ok next: \n\nI have seven magic candles, but two go out. How many candles do I have left?\"",
        opts: [
            {
                buttonText: "five",
                directTo: 16
            },
            {
                buttonText: "six",
                directTo: 17
            },
            {
                buttonText: "seven",
                directTo: 18
            },
            {
                buttonText: "Why are these questions all candle related?",
                directTo: 19
            }
        ]
    },
    //15
    {
        text: "The woman looks at you, thoroughly unimpressed. \n\n \"You're not even worth my time,\" she says flatly. \"Now fuck off, I have no interest in helping idiots.\" \n\nYou blink, and suddenly you find yourself back on the path at the exact place where you decided to approach the hut. \n\nWhere the cottage once stood, you see nothing but trees and brambles. \n\nYour shoes are gone, but you now have a hat, so it all evens out in the end, i guess...",
        opts: [],
        eventList: ["shoeTheft", "dunceCap"]
    },
    //16
    {
        text: "\"Correct! Two of my candles had an attitude problem and ditched me. I don't care that they were 'in love', I paid good money to that sorcerer for those candles.\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 20
            }
        ]
    },
    //17
    {
        text: "\"Math was never your strong suit, was it?\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 15
            }
        ]
    },
    //18
    {
        text: "\"Y'know what, I'll give you half credit. You'd be right if I had said 'normal' candles, but unfortunately these guys have legs.\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 20
            }
        ]
    },
    //19
    {
        text: "\"That's none of your business. Answer the question.\"",
        opts: [
            {
                buttonText: "continue",
                directTo: 14
            }
        ]
    },
    //20
    {
        text: "\"Ok, last question: \n\nIt cannot be seen, cannot be felt, cannot be heard, cannot be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after. It ends life, kills laughter. What is it? \"",
        opts: [],
        eventList: ["cottageFinalQ"]
    },
    //21
    {
        text: "Yes, that's correct!",
        opts: [
            {
                buttonText: "continue",
                directTo: 22
            }
        ]
    },
    //22
    {
        text: "\"Alright, so you aren't dumb as a rock. That's good to hear.\"",
        opts: [
            {
                buttonText: "...thanks?",
                directTo: 23
            },
            {
                buttonText: "Wow, you are rude",
                directTo: 23
            }
        ]
    },
    //23
    {
        text: "\"Now now, I didn't mean any harm by it,\" the woman said in a much more pleasant demeanor than before. \"How about I make it up to you by letting you ask *me* questions now?\"",
        opts: [
            {
                buttonText: "Ask about yourself",
                directTo: 24
            },
            {
                buttonText: "Ask about her",
                directTo: 25
            },
            {
                buttonText: "End the questions",
                directTo: 26
            },
        ]
    },
    //24
    {
        text: "\"Now now, I didn't mean any harm by it,\" the woman said in a much more pleasant demeanor than before. \"How about I make it up to you by letting you ask *me* questions now?\"",
        opts: [
            {
                buttonText: "How did I end up in the swamp?",
                directTo: 27
            },
            {
                buttonText: "You mentioned that there were others like me you have met?",
                directTo: 28
            },
            {
                buttonText: "What should I do next?",
                directTo: 29
            },
            {
                buttonText: "Ask a different kind of question",
                directTo: 23
            },
        ]
    },
    //25
    {
        text: "\"Now now, I didn't mean any harm by it,\" the woman said in a much more pleasant demeanor than before. \"How about I make it up to you by letting you ask *me* questions now?\"",
        opts: [
            {
                buttonText: "Ask about the screaming whistle and the cursing",
                directTo: 30
            },
            {
                buttonText: "Ask about the blood on the porch",
                directTo: 31
            },
            {
                buttonText: "Ask why she was annoyed to see you",
                directTo: 32
            },
            {
                buttonText: "Ask a different kind of question",
                directTo: 23
            },
        ]
    },
    //26
    {
        text: "\"I'm sorry I couldn't be of more help. Before you set off, let me get you something,\" the woman says. She gets you a cup of tea to drink using the kettle she had sat on the wood stove.",
        opts: [
            {
                buttonText: "Drink",
                directTo: 33
            },
        ]
    },
    //27
    {
        text: "\"Sorry dear, no clue.\"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 24
            },
        ]
    },
    //28
    {
        text: "\"Ah, yes, I have seen a handful of others like you emerge from the swamp. None have had any clue how they got there. \n\nYou got out of the swamp less damaged than many of the others, though. \"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 24
            },
        ]
    },
    //29
    {
        text: "\"Honestly? I have no idea. I would encourage you to keep following the path you are on. Sometimes just putting one foot in front of the other can lead you exactly where you need to go.\"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 24
            },
        ]
    },
    //30
    {
        text: "\" Oh, that?  \n\nMy dear, that was a tea kettle. I may use magic for most things, but instantly boiling water is not something I would waste my magic on. \n\nI will rather foolishly admit that I have a tendency to forget heat protection when I handle my kettle. I suspect you heard me cursing from burning myself\"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 25
            },
        ]
    },
    //31
    {
        text: "\"Yes, I understand why that would concern you. \n\nThis forest is not a particularly safe place to be, even for someone such as myself. Every fortnight, I leave out an offering to the ...thing that lives in these woods with me. It takes the sacrifice, and it leaves me alone. I suppose you saw the leftover parts of that offering.  \"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 25
            },
        ]
    },
    //32
    {
        text: "\"I mean this kindly, my dear, but in what situations should I be *excited* about unexpected guests this far into the woods?\"",
        opts: [
            {
                buttonText: "Ask a different question",
                directTo: 25
            },
        ]
    },
    //33
    {
        text: "The tea has an earthy yet sweet taste. The more you drink, the better it tastes. There's something about this tea that makes you feel... stronger?",
        opts: [
            {
                buttonText: "Thank her for her hospitality",
                directTo: 34
            },
        ],
        eventList: ["healToFull",]
    },
    //34
    {
        text: "\"You're welcome dear. Now take this for the road,\" she says, handing you a potion. \"Use this when you have injured yourself, and you will feel good as new.\"",
        opts: [
            {
                buttonText: "Continue",
                directTo: 35
            },
        ],
        eventList: ["gainHealthPotion",]
    },
    //35
    {
        text: "You wave goodbye to the generous woman and head back to the path. \n\nAs you reach the place on the trail where you had originally veered off before, you suddenly feel something shift behind you. You glance back, and where the cottage once stood, you see nothing but trees and brambles.",
        opts: [
        ],
    },
    
]