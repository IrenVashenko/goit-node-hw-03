const {Contact} = require("../../mod");

const addContact = async(req, res) => {
    const {favorite} = req.body;
    // const contactsadd = await Contact.create(req.body, {favorite}); 
    // console.log(contactsadd)
    const contacts = await Contact.create(req.body); 
    res.status(201).json({
        status:"success",
        code: 201,
        data: {
            contacts
        }
    })
}

module.exports = addContact;
