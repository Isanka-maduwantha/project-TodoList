let tasks = {};
    tasks.DefaultProject = {
            project:"DefaultProject",

           WakeUp :{
               complete : false,
                date:"2024.12.30",
                description:"i want to wakeuo",
                title: "WakeUp",
            },
           "Brush Teeth": {
                complete : false,
                date:"2024.12.25",
                description:"its good to brush teeth",
                title: "Brush Teeth",
            },
    }
    tasks.New = {
        project:"New",

        Dance :{
            complete : true,
            date:"2024.12.30",
            description:"",
            title: "Dance",
        },
        Bath: {
            complete : false,
            date:"2024.12.25",
            description:"",
            title: "Bath",
        },
}
export {tasks};