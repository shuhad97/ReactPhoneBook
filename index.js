const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

app.use(express.json())
app.use(morgan((tokens, req, res)=>{

    return[
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ')

}))

let phonebook = [  ]



app.get('/init', (req, res) =>{

    res.json(phonebook)

})


app.get('/info', (req, res) =>{

    res.send(`<p> Phone book has info for ${phonebook.length} people` )

})


app.post('/api/persons/', (req, res) =>{
    
    let userExists = false;
    const name = req.body.name
    const number = req.body.number

    if(name === undefined || number=== undefined){

        return res.status(400).json({
            error: 'Provide name or number'
        })


    }

    phonebook.forEach((person)=>{

        if(person.name === name){
          
            userExists = true;

            return res.status(400).json({
                error: 'Person already exists'
            })

        }
        
    })


    if(!userExists){

        const person = {
            id : Math.floor((Math.random()*Number.MAX_SAFE_INTEGER) + 1) ,
            name : req.body.name,
            number : req.body.number
        }

        phonebook = phonebook.concat(person)

        
       
        res.json(person)

    }
})


app.get('/api/persons/:id' , (req, res)=>{

    const id = Number(req.params.id) //Params comes up as String

    const person = phonebook.find(person => person.id === id)

    console.log(id)

    if(person !== undefined){

        res.json(person)

    } else {

        return res.status(400).json({
            error: 'Person missing, name must be unique'
        })

    }

})


app.delete('/api/persons/:id', (req, res) =>{

    const id = Number(req.params.id)

    phonebook = phonebook.filter(person =>person.id !== id)
   console.log(phonebook)
    res.json(phonebook)

})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
