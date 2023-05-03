const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const responses  = [

    `
    Use a variety of exercises: Incorporate a variety of exercises into your routine to work different muscle groups and keep your workouts interesting.
    Set realistic goals: Set achievable goals for yourself to help stay motivated and track your progress.
    Listen to your body: If something doesn't feel right, don't push yourself. Take a break or adjust the exercise to avoid injury.
    Eat a variety of foods: Make sure to eat foods from all the food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats. This will ensure that you get all the nutrients your body needs.
    `,

    `
    Hydrate: Drink plenty of water before, during, and after your workout to stay hydrated.
    Wear appropriate clothing and footwear: Wear comfortable, breathable clothing and supportive footwear to avoid blisters and other injuries.
    Consider working with a personal trainer: A personal trainer can help you create a personalized workout plan, teach you proper form, and keep you accountable.
    Portion control: Pay attention to how much you are eating. Use smaller plates and bowls, and measure your portions to avoid overeating.
    Stay hydrated: Drink plenty of water throughout the day to stay hydrated and help your body function properly.
    `,

    `
    Listen to your body: If something doesn't feel right, don't push yourself. Take a break or adjust the exercise to avoid injury.
    Rest and recover: Allow your body time to rest and recover between workouts to prevent burnout and injury.
    Stay hydrated: Drink plenty of water throughout the day to stay hydrated. Aim for at least 8 glasses of water a day.
    Stay hydrated: Drink plenty of water throughout the day to stay hydrated and help your body function properly.
    `,

    `Set realistic goals: Determine what you want to achieve through your gym routine, whether it's building strength, losing weight, or improving your overall fitness level.
    Manage stress: Stress can have a negative impact on your health, so it's important to find ways to manage it. This can include exercise, relaxation techniques, or talking to a mental health professional.
    Stay hydrated: Drink plenty of water throughout the day to stay hydrated and help your body function properly.`,

    `
    Start slowly: If you're new to the gym, start with light weights and lower intensity workouts to avoid injury and give your body time to adjust to the new routine.Warm up and cool down: Before and after your workout, spend 5-10 minutes doing some light cardio and stretching to warm up your muscles and prevent injury.
    Focus on form: When lifting weights, focus on using proper form to avoid injury and get the most out of each exercise.
    Eat more whole foods: Choose whole, unprocessed foods as much as possible. These include fruits, vegetables, whole grains, lean proteins, and healthy fats.`,

    `
    Start with a trainer: Consider working with a personal trainer to help you create a personalized workout plan, teach you proper form, and keep you accountable.
    Be consistent: Make exercise a regular part of your routine, and try to work out at least three to four times a week.
    Incorporate rest days: Allow your body time to rest and recover between workouts to prevent burnout and injury.
    Plan your meals: Plan your meals in advance to ensure that you are getting a variety of healthy foods. This can also help you avoid making unhealthy food choices when you are hungry and rushed.`,

    `Incorporate physical activity: Regular physical activity is essential for maintaining a healthy weight and overall health.
    Start with a trainer: Consider working with a personal trainer to help you create a personalized workout plan, teach you proper form, and keep you accountable.
    Start slowly: If you're new to the gym, start with light weights and lower intensity workouts to avoid injury and give your body time to adjust to the new routine.
    Use proper form: When lifting weights, focus on using proper form to avoid injury and get the most out of each exercise.`

]

app.get('/', (req, res)=>{
    const msg = req.query.msg
    const pos = msg.search(/[\d]{3}/)
    if(pos===-1)
    return res.status(400).json({reply:"Please enter your height in cm to know more about the diet plan."})
  
    let height = Number(msg.substring(pos,pos+3))
    let ind;
    if(height>200)ind = 5
    else if(height>190) ind = 4
    else if(height>180) ind = 3
    else if(height>170) ind = 2
    else if(height>160) ind = 1
    else ind = 0
    res.status(200).json({reply:responses[ind]})
})

app.listen(5000, ()=>{
    console.log('Server started')
})