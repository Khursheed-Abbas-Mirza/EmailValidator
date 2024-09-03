import React,{useState} from 'react'
import Spinner from './Spinner'
const Main = () => {
    const  [results, setresults] = useState({})
    const [loading, setloading] = useState(false)
    const evalidate=async(e)=>{
        e.preventDefault()
        setloading(true)
        const  key="ema_live_LibI5TY03v4xCykFgQ62VtGqOot9nETwsO41evFa"
        const email=document.getElementById('username').value
        const url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
        const res=await fetch(url)
        const result=await res.json()
        
        setresults(result)
        console.log(results)
        setloading(false)
    }
    return (
    <>
            <div className='mymain '>
                <div className="mycontainer my-5">
                    <h1>Enter your Email to Validate</h1>
                    <form >
                        <input type="text" id="username" name="username" required placeholder='Enter your Email'/>
                        <br /><br />
                                <button onClick={evalidate} className='btn'>Submit</button>
                                
                            </form>

                              <h2>Your results</h2>
                              {loading &&<Spinner/>}
                          <div>
                            {Object.entries(results).map((ele,index)=>{
                               
                                return <p key={index}>{ele[0]} : {typeof ele[1] === 'boolean'?`${ele[1] && true}`:ele[1]}</p>
                            })}
                          </div>
                        </div>
                    </div>
                    </>
                    )
}

                    export default Main
