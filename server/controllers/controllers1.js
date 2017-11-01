var mongoose = require('mongoose');
var User = mongoose.model('Login');
var Poll = mongoose.model('Poll');
var session = require('express-session');

module.exports = {


    createPoll: function(req, res) {
        console.log("inside formcreate");
        console.log("pollinfo3", req)
        var poll= new Poll(
            {
                date: req.body.date,
                time: req.body.time,
                complain: req.body.complain,
            }
        );
        poll.creator = req.body.creator

    poll.save(function (err, data) {
            console.log("pollinfo4", data)
            if(err) {
                res.json(err);
                return;
            }else {
                res.json(data);
                console.log("pollinfo5", data)
            }
        });
    }, 

    getall: function(req, res) {
        console.log("pollsall body" ,req.body)
     //   var poll= new Poll(req.body);
        Poll.find({}, (err, polls) => {
            console.log("polls all 6" ,polls)
            if(err){
                return res.status(401).json(err);
            } else {
                return res.json(polls);
                console.log("polls all 7" ,polls)
            }
        })
    },

    //delete question from the dashboard
    delete: function (req, res) {
        Poll.remove({_id: req.params.id}, (err) => {
            if(err) {
                return res.status(500).json(err);
            }
        })
        return res.json("Deleted!")
    },




    getid: function(req, res) {
        console.log("inside showall");
        if(req.session.user) {
            return res.json(req.session.user);
        }else{
            return res.status(500).json("Not logged in")
        }
    },

    create: function (req, res) {
        // console.log("inside create", req.body);
        // console.log(req.body);
        //var job = new Login(req.body);
        User.findOne({name: req.body.name}, (err, user) => {
            if(err) {
                return res.status(401).json(err)
            }
            else if(user) {
                console.log("helow", user)
                req.session.user = user
                // console.log("session",req.session.user)
                res.json({user})
            }
            else {
                let user = new User(req.body);
                console.log("hello2", user)
                user.save((err) => {
                    if(err){
                        return res.status(401).json(err);
                    }
                    else{
                        console.log(`${user} has been saved`)
                        req.session.user = user;
                        console.log("session",req.session.user)
                        res.json({user});
                    }
                })
            }
        })
    },

    logout: function (req, res) {
        req.session.destroy()
		return res.json('bye bye');
    }
    // Logout clears our session

}