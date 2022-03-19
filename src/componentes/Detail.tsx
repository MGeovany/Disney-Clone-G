import React from 'react'
/*
interface Props{
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detail: React.FC<Props> = ({setIsAuth}) => {

    const history= useHistory();

    const handleLogin = () =>{
        setIsAuth(true);

        history.push("/home")
    };

    return (
    
        <button onClick={() => handleLogin()}>DetailBtn</button>
    
    );
}



export default Detail;*/

import '../styles/Detail.css'


const Detail = () => {
  return (
    <div className='container_detail'>
        <div className='background'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4303D6F5FFF404B0E9CC5D5776DB831BF790393388AFC4E1ACDDECE793B304DC/scale?width=1440&aspectRatio=1.78&format=jpeg'></img>    

        </div>
            <div className="imgTitle">
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FBE28F315BAB92AB4B89F58234303AD6C850CD7634F4F8475978D9FA3B7F3EB/scale?width=1440&aspectRatio=1.78&format=png'></img>
            </div>
    </div>
  )
}

export default Detail