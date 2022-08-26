import { useState } from "react"
import baseApi from "../../api/baseApi"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLogin } from "../../context";


const useAuthFormState = () => {
  const { setLoggedin } = useLogin();

    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [loading, setLoading] = useState(false);
    const [visible, setvisible] = useState(false);
    const [toast, setToast] = useState({
      open:false,
      status:'',
      message:'',
    });
    const save =async (value)=>{
      await AsyncStorage.setItem('token', value)
      await AsyncStorage.setItem('loggedin', 'true')

      
      AsyncStorage.getItem('loggedin').then(res =>
        res === 'true' ? setLoggedin(true) : setLoggedin(false)
          



          )



    }
    // const [errors, setError] = useState('');
    const timeOut =(toast)=>{

        setLoading(false)
        setToast(toast)
        console.log(toast)
        setvisible(true)


    }

    let isEmailValid = true
    let isPasswordValid = true
    let errorMessage =''
    let errorMessagePwd =''

    if (email  ===  '') {
      isEmailValid= false
      errorMessage='Email required!'
    }
    
    if (password  ===  '') {
      
      isPasswordValid= false
      errorMessagePwd='Password required!'
    }

    const  handleLogin = ()=>{

      setLoading(true)
      console.log(email);
      console.log(password);
       baseApi.post(
            '/auth/both/login', 
            {
              email: email,
              password: password
            },
            {
            headers: {
              'content-type': 'application/json',
            },
          }).then(res=>{

            timeOut({
              open: true,status:res.data.login === 'FAILED' ?'error' :'success',
              message:res.data.login === "SUCESS"  ? 'Connexion établir avec success' : res.data.DESC
            })
            if(res.data.login === "SUCESS"){
              save(res.data.token, res.data.USER.authRoleId)
              setToken(res.data.token)
            }
              console.log(res)
          
        }).catch(err=>{
          if(err.code =='ERR_NETWORK'){

            timeOut({open: true, status:'error', message:"Une erreur est survenu !"})
            console.log('fdfdfd',err)
          }

        })
    }
  
    return {
        email: {
        value: email,
        set: setEmail,
        valid: isEmailValid,
        errors: errorMessage
      },
      password: {
        value: password,
        set: setPassword,
        valid: isPasswordValid,
        errors:errorMessagePwd
      },
      submit: {
        value: submit,
        set: () => setSubmit(true),
      },
      toast,
      handleLogin,
      loading,
      visible:{
        value: visible,
        set: setvisible
      }
      
    };
  };

  export default useAuthFormState