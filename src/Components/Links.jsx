import  {useState}  from "react";
import "../Components/App.css";

const Links =()=>{
    const [fbvalue, setfbValue] = useState( "");
    const [instavalue, setinstaValue] = useState( "");
    const [Twittvalue, setTwittValue] = useState( "");
    const [GitHub, setGitHubValue] = useState( "");
    const [Telegram, setTelegramValue] = useState( "");
    const [Youtube, setYoutubeValue] = useState( "");
    const [Email, setEmailValue] = useState( "");
    const [linkedin, setlinkedinValue] = useState( "");
    const [Name, setNameValue] = useState( "");
    const [profile, setprofileValue] = useState( "");

    const handleName=(evt)=>{
        setNameValue(evt.target.value);
    }
    const handleProfile=(evt)=>{
           setprofileValue((evt.target.value) ?<div  className="pic" >Profile<br /></div> 
           : null );
    }
    
    const handlefacebook=(evt)=>{

        setfbValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-facebook" style={{color: "#080808"}} ></a> : null);
    }
    const handleinstagram=(evt)=>{
        setinstaValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-instagram" style={{color: "#000000"}} ></a> : null);
    }
   
    const handleTwitter=(evt)=>{
        setTwittValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-twitter" style={{color: "#000000"}} ></a> : null);
    }
    const handleGitHub=(evt)=>{
        setGitHubValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-github" style={{color: "#000000"}} ></a> : null);
    }

   
    const handleTelegram=(evt)=>{
        setTelegramValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-telegram" style={{color: "#000000"}} ></a> : null);
    }

    const handleYoutube=(evt)=>{
        setYoutubeValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-youtube" style={{color: "#000000"}} ></a> : null);
    }
    

    const handleEmail=(evt)=>{
        setEmailValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-solid fa-envelope" style={{color: "#000000"}} ></a> : null);
    }

    const handlelinkedin=(evt)=>{
        setlinkedinValue((evt.target.value.length > 0) ? <a href = {evt.target.value} className="fa-brands fa-linkedin" style={{color: "#000000"}} ></a> : null);

    }


    return(
        <> 
       
      

        <div className="head-box" > 
          <h1 className="Heading"  >Make your Tree  <br/> <hr /> <p>{profile}</p> <p>{Name}</p> <hr />
    <p>{fbvalue}</p>  <p>{instavalue}</p> <p>{GitHub}</p>  <p>{Telegram}</p>  <p>{Youtube}</p> <p>{Twittvalue}</p>     <p>{Email}</p> <p>{linkedin}</p>

           </h1>
          
          
          
        </div>

        <div className="profileinfo">

            <h1>Profile <br />  <p className="profile-p">Some public information about you</p> </h1> 
            
        </div>

        <div className="labels">

            
        <div className="Profile-box">
        <label className="Name" >Name<br />
            
        <input type="text" name="Name" id="Name"  onChange={handleName}/></label>  
        <br />   <br />  <br /> 

        <label className="Name" >Profile Url<br />
            
        <input type="text" placeholder="enter url" id="pic"  onChange={handleProfile}/> 
        </label>  
        </div>





         <br /> <hr />
            

        <label className="facebook" >Facebook  <br />
         
         <input type="search" name="facebook" id="facebook"  onChange={handlefacebook}/></label>  <br /> <hr />

         <label  className="instagram">Instagram  <br /> 
         
         <input type="search" name="instagram" id="facebook"  onChange={handleinstagram}/></label>   <br /><hr />



         <label  className="twitter"> Twitter
            <br /> 
         
         <input type="search" name="twitter" id="facebook"  onChange={handleTwitter}/></label> <br /><hr />


         <label className="github">GitHub  <br /> 
         
         <input type="search" name="GitHub" id="facebook"  onChange={handleGitHub}/></label>   <br /><hr />



         <label className="telegram">Telegram  <br /> 
         
         <input type="search" name="Telegram" id="facebook"  onChange={handleTelegram}/></label>   <br /><hr />



         <label className="youtube">Youtube  <br /> 
         
         <input type="search" name="Youtube" id="facebook"  onChange={handleYoutube}/></label>   <br /><hr />


         <label className="email" >Email  <br /> 
         
         <input type="search" name="Email" id="facebook"  onChange={handleEmail}/></label>   <br /><hr />

         <label className="linkedin">linkedin  <br /> 
         
         <input type="search" name="Email" id="facebook"  onChange={handlelinkedin}/></label>   <br /><hr />

         </div>


        </>
    );
}
export default Links;