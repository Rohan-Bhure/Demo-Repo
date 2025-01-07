const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy:true
    }]
}];

const express=require("express")
const app = express()
app.use(express.json())

app.get('/',function(req,res){
    let rohanKidney =users[0].kidneys;
    let noOfKidney =users[0].kidneys.length;
    let noOfHeathyKidnees =0;
    let noOfunHeathyKidnees =0;
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy){
            noOfHeathyKidnees++;
        }
        else{
            noOfunHeathyKidnees++
        }
        
    }
    res.json({
        noOfHeathyKidnees,
        noOfunHeathyKidnees,
        noOfKidney,
        rohanKidney
        

    })
})

app.post('/newK',function(req,res){
    let healthy = req.body.ishealthy
    

    let add_Kednye=users[0].kidneys
    add_Kednye.push({healthy: healthy})
    res.json({"mgs":"Kidneye Added"})
})
app.put('/health_kidney',function(req,res){
    let kidneyes= users[0].kidneys
    for(let i=0;i<kidneyes.length;i++)
    {
        if(!kidneyes[i].healthy)
        {
            kidneyes[i].healthy=true
            console.log("Inserted New Kidney")
            res.json({"mgs":`kidney installed at index ${i}` })
        }else{
            continue
        }
        res.json({"mgs":"no Kideney is unhealty"})
    }
})

app.delete('/remove_damage_Kidney',function(rep,res){
      let kidneys=users[0].kidneys
      for(let i=0;i<kidneys.length;i++)
      {
        if(!users[0].kidneys[i].healthy)
        {
            kidneys.splice(i,1)
            res.json({"mgs":`Damage Kindeny Removed ${i}`})
            
        }

      }
      res.json({"mgs":'Every Kidney are OKK'})

})


app.listen(3000);