export const Users = [
    {
        id: 1,
        firstname : "admin",
        lastname : "admin",
        email : "admin@gmail.com",
        role : "admin", 
        desc : "iam the admin ...",
        pic : "/images/profile.png",
    },
    {
        id: 2,
        firstname : "client1",
        lastname : "clint1",
        email : "client1@gmail.com",
        role : "client", 
        desc : "im the first client",
        pic : "/images/profile.png",
        ifollow :[3,5,4],
        theyfollow : [3,5,4],
        myprojects : [1,2], 
        invoices  : [1,2],
    },
    {
        id: 3,
        firstname : "client2",
        lastname : "client2",
        email : "client2@gmail.com",
        role : "client", 
        desc : "im the second client ",
        pic : "/images/profile.png",
        ifollow :[2,5,4],
        theyfollow : [2,5,4],
        myprojects : [3,4], 
        invoices  : [3,4],
    },
    {
        id: 4,
        firstname : "freelancer1",
        lastname : "freelancer1",
        email : "freelancer1@gmail.com",
        role : "freelancer", 
        job : "web dev",
        desc : "im the first freelancer",
        pic : "/images/profile.png",
        ifollow :[2,3,5],
        theyfollow : [2,3,5],
        myprojects : [1,2],
        feedbacks : [1,2], 
    },
    {
        id: 4,
        firstname : "freelancer2",
        lastname : "freelancer2",
        email : "freelancer2@gmail.com",
        role : "freelancer", 
        job : "photographer",
        desc : "im the second freelancer",
        pic : "/images/profile.png",
        ifollow :[2,3,4],
        theyfollow : [2,3,4],
        myprojects : [3,4],
        feedbacks : [3,4], 
    },
]
export const projects = [
    {
        id: 1,
        owner: "project title",
        creator: "client", 
        desc: " first project "
    },
    {
        id: 2,
        owner: "project title",
        creator: "client1", 
        desc: " second project "
    },
    {
        id: 3,
        owner: "project title",
        creator: "client2", 
        desc: " first project "
    },
    {
        id: 4,
        owner: "project title",
        creator: "client3", 
        desc: " second project "
    },
]
export const invoices = [
    {
        id: 1,
        sender: "freelancer1",
        receiver: "client1",
        object: "to test",
        desc: "i fixed that bug try and test it",
    },
    {
        id: 2,
        sender: "freelancer1",
        receiver: "client1",
        object: "fixed bugs",
        desc: "i fixed that bug",
    },
    {
        id: 3,
        sender: "freelancer2",
        receiver: "client2",
        object: "completed",
        desc: "i completed the project",
    },
    {
        id: 4,
        sender: "freelancer2",
        receiver: "client2",
        object: "check pics",
        desc: "i finished the photos",
    },
    
]
export const    feedbacks = [
    {
        id: 1,
        sender: "client1",
        receiver: "freelancer1",
        object: "dont work",
        desc: "i did that and dont work",
    },
    {
        id: 2,
        sender: "client1",
        receiver: "freelancer1",
        object: "work",
        desc: "thank you",
    },
    {
        id: 3,
        sender: "client2",
        receiver: "freelancer2",
        object: "request",
        desc: "edit the pics stoouupid",
    },
    {
        id: 4,
        sender: "client2",
        receiver: "freelancer2",
        object: "request",
        desc: "i want another pic",
    },
    
]

export const comments = [
    {
        id: 1,
        sender: "vewer1",
        email: "viwer1@gmail.com",
        com : "i like the app",
    },
    {
        id: 2,
        sender: "vewer2",
        email: "viwer2@gmail.com",
        com : "i like the app",
    },
    {
        id: 3,
        sender: "vewer3",
        email: "viwer3@gmail.com",
        com : "i like the app",
    },
    {
        id: 4,
        sender: "vewer4",
        email: "viwer4@gmail.com",
        com : "i like the app",
    },
    {
        id: 5,
        sender: "vewer5",
        email: "viwer5@gmail.com",
        com : "i like the app",
    },
]