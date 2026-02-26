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
        steps: 110,
        content: " Up ahead, you spot a small cottage nestled within the thicket to your left of the path. The walls are well-worn and the roof has seen better days, but there are fresh footsteps in the dirt path leading to the house. \n\nThankfully, the cottage does not appear to be made of gingerbread.",
        eventList: ["cottageOptionalEvent"]
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
        text: "On second thought, the house seems perfectly fine to be left alone. You have returned to the path",
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
        text: "\"Ok, last question: What animal hunts for sport, preens like a peacock, and invades *any* habitat?\" \n \n (Author's note: This part is to be continued!!!!!!!!!!!!!!!!)",
        opts: [
            {
                buttonText: "continue",
                directTo: 14
            }
        ]
    },
    
]