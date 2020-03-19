const ppl = [
    {
        name:'Aaron',
        gender: 'male',
        salary: 10,
        friends: [
            {
                name:'Mike',
                gender: 'male',
                salary: 10,
                friends: [
                    {
                        name:'Betty',
                        gender: 'female',
                        salary: 100,
                        friends: []
                    }
                ]
            },
            {
                name:'Sharon',
                gender: 'female',
                salary: 1000,
                friends: []
            },
            {
                name:'Gary',
                gender: 'male',
                salary: 100,
                friends: []
            }

        ]
    },
    {
        name:'Charles',
        gender: 'male',
        salary: 1000,
        friends: [
            {
                name:'Zoe',
                gender: 'male',
                salary: 1,
                friends: []
            },
            {
                name:'Donna',
                gender: 'female',
                salary: 1,
                friends: []
            }

        ]
    },
    {
        name:'Sally',
        gender: 'female',
        salary: 10000,
        friends: []
    }
];

async function first(people, total) {
    if(!Array.isArray(people)) {
        for(p in people) {
            if(p == 'name') {
                console.log("not array " + people[p] + " \n");
            }
            if(p == 'salary') {
                total += people[p];
                console.log("line71-" + total + " \n");
            }

            if(p == 'friends' && typeof people[p][0] != 'undefined') {
                for(v1 of people[p]){
                    total = await first(v1, total);
                    console.log("line77-" + total + " \n");

                }
            }

        }
    } else {
        for(v1 of people){
            console.log("array " + v1 + " \n");
            total = await first(v1, total);
            console.log("line87-" + total + " \n");

        }
    }

    return total;
}

console.log(first(ppl, 0));