require('dotenv').config()
const express = require('express')
const app = express();
const morgan = require('morgan')
const Contact = require('./models/contact')
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


app.get('/init', (req, res) =>{


    Contact.find({}).then(contacts =>{
        console.log(contacts)
        res.json(contacts.map(contact =>contact.toJSON()))

    })
    .catch(error =>{

        console.log(error)
        response.status(500).send({error : 'Data could not be intialised'})

    })

 

})


app.get('/info', (req, res) =>{

    Contact.countDocuments({}, (err, count) =>{
    
        res.send(`<p> Phone book has info for ${count} people` )


    }).catch(error =>{

        console.log(error)
        response.status(500).send({error : 'Data could not be retrieved'})

    })



})


app.post('/api/persons/', (req, res) =>{
    
    const name = req.body.name
    const phoneNumber = req.body.number

    if(name === undefined || phoneNumber=== undefined){

        return res.status(400).json({
            error: 'Provide name or number'
        })

    }

    const contact = new Contact({
        name: name,
        number: phoneNumber,
    })

    contact.save().then(response =>{

        console.log(response + ' Data has been saved to database')
        
    }).then(() =>{

         res.json(contact)
   
    })


   

})


app.get('/api/persons/:id' , (req, res)=>{

    const id = req.params.id 

    Contact.find({_id : id}).then(response =>{


        if(response !== undefined){

            res.json(response)

        } else {

            return res.status(400).json({
             error: 'Person missing'
            })

        }

     }).catch(error =>{

        console.log(error)
        response.status(500).send({error : 'ID does not exist'})

    })


})


app.delete('/api/persons/:id', (req, res) =>{

    const id = req.params.id

    Contact.findOneAndRemove({_id: id}, (error)=>{

        if(!error){
            console.log('Contact with ID '  + id + ' has been deleted ')
        } else{
            console.log('User did not delete')
        }

    }).then(() =>{

        Contact.find({}).then(contacts =>{
                console.log(contacts)
                res.json(contacts.map(contact =>contact.toJSON()))

        }).catch(error =>{

            console.log(error)
            response.status(400).send({error : 'Contact could not be found'})
    
        })
    

    })


})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
